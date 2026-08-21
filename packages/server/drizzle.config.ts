import { defineConfig } from "drizzle-kit";
import { DATABASE_URL } from "./src/db/constants";

const databaseUrl = DATABASE_URL || "postgresql://dummy:dummy@localhost:5432/dummy";

export default defineConfig({
  schema: "./src/db/schema/index.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});
