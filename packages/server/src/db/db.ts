import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";
import { DATABASE_URL, IS_BUILD_PHASE } from "./constants";

if (!DATABASE_URL && !IS_BUILD_PHASE) {
  throw new Error("DATABASE_URL environment variable is not defined");
}

type Database = ReturnType<typeof drizzle<typeof schema>>;

const globalForDb = globalThis as unknown as {
  db?: Database;
};

if (!globalForDb.db) {
  const pool = new pg.Pool({
    connectionString: DATABASE_URL || "postgresql://dummy:dummy@localhost:5432/dummy",
  });
  globalForDb.db = drizzle(pool, { schema });
}

export const db = globalForDb.db;
export * from "./schema";
