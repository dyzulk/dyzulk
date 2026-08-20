# Drizzle ORM Schema Definitions

All database tables in Dyzulk are defined using Drizzle ORM for PostgreSQL within `packages/server/src/db/schema/`.

---

## 1. Schema Conventions

- **Primary Keys**: Always use UUID with `defaultRandom().primaryKey()`:
  ```ts
  id: uuid("id").defaultRandom().primaryKey(),
  ```
- **Foreign Keys**: Define references with explicit cascade behaviors:
  ```ts
  organizationId: uuid("organization_id")
    .notNull()
    .references(() => organizations.id, { onDelete: "cascade" }),
  ```
- **Timestamps**: Always store with timezone enabled and default to now:
  ```ts
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  ```
- **Indexes & Unique Constraints**: Define composite indexes and uniqueness constraints in the secondary table callback function.

---

## Schema Example (`packages/server/src/db/schema/example.ts`)

```ts
import { pgTable, text, uuid, timestamp, uniqueIndex } from "drizzle-orm/pg-core";
import { organizations } from "./organization";

export const deployments = pgTable("deployments", {
  id: uuid("id").defaultRandom().primaryKey(),
  organizationId: uuid("organization_id")
    .notNull()
    .references(() => organizations.id, { onDelete: "cascade" }),
  commitHash: text("commit_hash").notNull(),
  status: text("status", { enum: ["queued", "building", "ready", "error"] }).default("queued").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => [
  uniqueIndex("deployments_org_commit_idx").on(table.organizationId, table.commitHash)
]);
```

---

## Exporting New Schemas

When adding a new schema file, always re-export it in `packages/server/src/db/schema/index.ts`:

```diff
  export * from "./auth";
  export * from "./organization";
  export * from "./project";
  export * from "./service";
+ export * from "./deployments";
```
