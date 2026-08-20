import { type InferSelectModel } from "drizzle-orm";
import { accounts, sessions, accountsProfile } from "../db/schema/auth";

export type Account = InferSelectModel<typeof accounts>;
export type Session = InferSelectModel<typeof sessions>;
export type AccountProfile = InferSelectModel<typeof accountsProfile>;

export interface SessionValidationResult {
  session: Session | null;
  account: (Account & { profile: AccountProfile | null }) | null;
}
