# Authentication & Security Architecture

Guidelines for authentication, session management, password security, and Next.js server helpers inside `packages/server/src/auth/`.

## 1. Overview & Components

The authentication system in `@dyzulk/server` consists of:
- **`types.ts`**: Session, Account, Profile, and `SessionValidationResult` types.
- **`password.ts`**: Password hashing and verification using modern crypto algorithms.
- **`session.ts`**: Session lifecycle (create, validate, extend, invalidate).
- **`verification.ts`**: Verification tokens for magic links or email/phone verification.
- **`next-helpers.ts`**: Cookie and session integration helpers for Next.js Server Actions and Route Handlers.

---

## 2. Session Lifecycle Standards

Sessions are stored in the database (`sessions` table) with the following rules:

1. **Session Creation**:
   - Generates a secure random 32-byte hex ID (`crypto.randomBytes(32).toString("hex")`).
   - Default session expiration: **30 Days**.
   - Records metadata: `userAgent`, `ipAddress`, and `accountId`.

2. **Session Validation & Sliding Expiration**:
   - When a session is validated via `validateSession(sessionId)`:
     - If expired, automatically deletes the session record and returns `{ session: null, account: null }`.
     - If remaining time is under **15 Days** (sliding window), automatically extends `expiresAt` by another 30 days.

3. **Session Invalidation**:
   - Single session logout: `invalidateSession(sessionId)`.
   - Global logout (all devices): `invalidateAllUserSessions(accountId)`.

---

## 3. Next.js Server Helpers

In `packages/server/src/auth/next-helpers.ts`, utilities bridge database sessions with Next.js cookie management (`next/headers`):

- **`setSessionTokenCookie(sessionId, expiresAt)`**: Sets a secure `httpOnly`, `sameSite: "lax"`, and `path: "/"` cookie named `session_token`.
- **`deleteSessionTokenCookie()`**: Clears the `session_token` cookie.
- **`getCurrentSession()`**: Reads the cookie, validates the session against the database, and returns the authenticated user/account.

---

## 4. Security Rules

- **Strict Server Execution**: Auth methods that query database sessions or hash passwords MUST only be executed on the server.
- **No Plaintext Passwords**: Never store or log raw passwords. Always verify using `verifyPassword(plain, hashed)`.
- **Secure Cookies**: The session cookie must always be marked `httpOnly: true`, and `secure: true` in production environments.
