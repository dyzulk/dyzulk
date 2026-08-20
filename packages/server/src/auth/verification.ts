import { eq, and } from "drizzle-orm";
import { randomBytes, randomInt } from "crypto";
import { db } from "../db/db";
import { verificationTokens } from "../db/schema/auth";

const TOKEN_COOLDOWN_MS = 1000 * 60; // 60 Seconds Cooldown
const TOKEN_EXPIRATION_MS = 1000 * 60 * 15; // 15 Minutes

/**
 * Generates a verification token for an identifier (e.g. email) and stores it in the database.
 * If type is "numeric", it generates a 6-digit OTP code. Otherwise, it generates a hex token.
 * Enforces a 60-second cooldown per identifier to prevent spam and rate-limit abuse.
 */
export async function generateVerificationToken(
  identifier: string,
  type: "numeric" | "hex" = "numeric"
): Promise<string> {
  // Check for existing token and enforce cooldown
  const [existingToken] = await db
    .select({
      id: verificationTokens.id,
      createdAt: verificationTokens.createdAt,
    })
    .from(verificationTokens)
    .where(eq(verificationTokens.identifier, identifier))
    .limit(1);

  if (existingToken) {
    const elapsedMs = Date.now() - existingToken.createdAt.getTime();
    if (elapsedMs < TOKEN_COOLDOWN_MS) {
      const remainingSeconds = Math.ceil((TOKEN_COOLDOWN_MS - elapsedMs) / 1000);
      throw new Error(`Please wait ${remainingSeconds}s before requesting a new verification code.`);
    }

    // Clear existing token after cooldown check passes
    await db.delete(verificationTokens).where(eq(verificationTokens.identifier, identifier));
  }

  // Generate token value
  const token =
    type === "numeric"
      ? randomInt(100000, 999999).toString()
      : randomBytes(24).toString("hex");

  const expiresAt = new Date(Date.now() + TOKEN_EXPIRATION_MS);

  await db.insert(verificationTokens).values({
    identifier,
    token,
    expiresAt,
  });

  return token;
}

/**
 * Validates a verification token for an identifier. 
 * Consumes (deletes) the token immediately upon validation to ensure one-time usage.
 */
export async function validateVerificationToken(
  identifier: string,
  token: string
): Promise<boolean> {
  const result = await db
    .select()
    .from(verificationTokens)
    .where(
      and(
        eq(verificationTokens.identifier, identifier),
        eq(verificationTokens.token, token)
      )
    )
    .limit(1);

  const storedToken = result[0];
  if (!storedToken) {
    return false;
  }

  // Delete the token immediately (even if expired, it must be cleared)
  await db.delete(verificationTokens).where(eq(verificationTokens.id, storedToken.id));

  // Check expiration
  if (Date.now() >= storedToken.expiresAt.getTime()) {
    return false;
  }

  return true;
}
