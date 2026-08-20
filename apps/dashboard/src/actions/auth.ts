"use server";

import { eq } from "drizzle-orm";
import {
  db,
  accounts,
  generateVerificationToken,
  validateVerificationToken,
  createSession,
  setSessionCookie,
  deleteSessionCookie,
  mailService,
  OtpVerificationEmail,
} from "@dyzulk/server";

export async function sendOTPAction(email: string, hpCompany?: string) {
  // Honeypot trap: if filled by automated bots, silently drop and return success
  if (hpCompany && hpCompany.trim().length > 0) {
    console.warn(`[AUTH] Bot submission detected via honeypot trap from email: ${email}`);
    return { success: true };
  }

  if (!email || !email.includes("@")) {
    return { success: false, error: "Invalid email address" };
  }

  try {
    const token = await generateVerificationToken(email, "numeric");

    // In development/production server console, log the OTP for testing/access
    console.log(`\n========================================`);
    console.log(`[AUTH] OTP Verification Code for: ${email}`);
    console.log(`[AUTH] Code: ${token}`);
    console.log(`========================================\n`);

    // Dispatch verification email
    await mailService.send({
      to: email,
      subject: `${token} is your Dyzulk verification code`,
      template: OtpVerificationEmail({ code: token }),
      text: `Your Dyzulk verification code is: ${token}. This code is valid for 15 minutes.`,
    });

    return { success: true };
  } catch (error: any) {
    console.error("Failed to generate or send OTP:", error);
    return { success: false, error: error.message || "Failed to send code. Please try again." };
  }
}

export async function verifyOTPAction(email: string, token: string) {
  if (!email || !token) {
    return { success: false, error: "Email and code are required" };
  }

  try {
    const isValid = await validateVerificationToken(email, token);
    if (!isValid) {
      return { success: false, error: "Invalid or expired verification code" };
    }

    // Find or create account
    let account = await db.query.accounts.findFirst({
      where: eq(accounts.email, email),
    });

    if (!account) {
      const [newAccount] = await db
        .insert(accounts)
        .values({ email })
        .returning();
      
      if (!newAccount) {
        throw new Error("Failed to auto-register new account");
      }
      account = newAccount;
    }

    // Create session
    const session = await createSession(account.id);
    await setSessionCookie(session.id, session.expiresAt);

    return { success: true };
  } catch (error: any) {
    console.error("Verification error:", error);
    return { success: false, error: "Verification failed. Please try again." };
  }
}

export async function logoutAction() {
  try {
    await deleteSessionCookie();
    return { success: true };
  } catch (error: any) {
    console.error("Logout error:", error);
    return { success: false, error: "Logout failed." };
  }
}
