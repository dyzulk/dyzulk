import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://dyzulk:gaksjndkiu12@172.31.100.3:5432/dyzulk-cloud",
});

export const db = drizzle(pool, { schema });
export * from "./schema";
