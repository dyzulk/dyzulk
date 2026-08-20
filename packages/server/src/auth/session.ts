import { eq } from "drizzle-orm";
import { randomBytes } from "crypto";
import { db } from "../db/db";
import { sessions, accounts, accountsProfile } from "../db/schema/auth";
import type { Session, SessionValidationResult } from "./types";

const SESSION_EXPIRATION_MS = 1000 * 60 * 60 * 24 * 30; // 30 Days
const SESSION_RENEWAL_THRESHOLD_MS = 1000 * 60 * 60 * 24 * 15; // 15 Days

/**
 * Creates a new database session for the given account.
 */
export async function createSession(
  accountId: string,
  userAgent?: string | null,
  ipAddress?: string | null
): Promise<Session> {
  const sessionId = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_EXPIRATION_MS);

  const [session] = await db
    .insert(sessions)
    .values({
      id: sessionId,
      accountId,
      expiresAt,
      userAgent,
      ipAddress,
    })
    .returning();

  if (!session) {
    throw new Error("Failed to create session in database");
  }

  return session;
}

/**
 * Validates a session by ID. Deletes expired sessions and extends session validity if close to expiry.
 */
export async function validateSession(sessionId: string): Promise<SessionValidationResult> {
  // Query session, account, and profile using Drizzle relational or joins
  const result = await db
    .select({
      session: sessions,
      account: accounts,
      profile: accountsProfile,
    })
    .from(sessions)
    .innerJoin(accounts, eq(sessions.accountId, accounts.id))
    .leftJoin(accountsProfile, eq(accounts.id, accountsProfile.accountId))
    .where(eq(sessions.id, sessionId))
    .limit(1);

  const row = result[0];
  if (!row) {
    return { session: null, account: null };
  }

  const { session, account, profile } = row;

  // Check expiration
  if (Date.now() >= session.expiresAt.getTime()) {
    await db.delete(sessions).where(eq(sessions.id, sessionId));
    return { session: null, account: null };
  }

  // Extend session if past renewal threshold
  if (Date.now() >= session.expiresAt.getTime() - SESSION_RENEWAL_THRESHOLD_MS) {
    session.expiresAt = new Date(Date.now() + SESSION_EXPIRATION_MS);
    await db
      .update(sessions)
      .set({ expiresAt: session.expiresAt })
      .where(eq(sessions.id, sessionId));
  }

  return {
    session,
    account: {
      ...account,
      profile,
    },
  };
}

/**
 * Invalidates a single session by ID.
 */
export async function invalidateSession(sessionId: string): Promise<void> {
  await db.delete(sessions).where(eq(sessions.id, sessionId));
}

/**
 * Invalidates all sessions associated with an account.
 */
export async function invalidateAllUserSessions(accountId: string): Promise<void> {
  await db.delete(sessions).where(eq(sessions.accountId, accountId));
}
