import { cookies } from "next/headers";
import { validateSession } from "./session";
import type { SessionValidationResult } from "./types";

export const SESSION_COOKIE_NAME = "session_id";

/**
 * Retrieves the current session and user details from Next.js server context (headers/cookies).
 * Handles Next.js 15+ async cookie store resolution.
 */
export async function getServerSession(): Promise<SessionValidationResult> {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!sessionId) {
    return { session: null, account: null };
  }
  return validateSession(sessionId);
}

/**
 * Stores the session identifier into the user's cookies.
 */
export async function setSessionCookie(sessionId: string, expiresAt: Date): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
}

/**
 * Removes the session cookie from the user's browser.
 */
export async function deleteSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}
