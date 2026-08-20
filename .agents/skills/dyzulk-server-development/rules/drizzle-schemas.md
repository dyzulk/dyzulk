# Drizzle ORM Schema Standards

Conventions and rules for defining database tables and relations in `packages/server/src/db/schema/`.

## 1. File Organization

- Every domain entity should have its own dedicated schema file inside `packages/server/src/db/schema/` (e.g. `auth.ts`, `organization.ts`, `project.ts`).
- All schemas and relations must be re-exported through `packages/server/src/db/schema/index.ts`.

## 2. Table Definition Blueprint

```typescript
import { pgTable, text, timestamp, uuid, index } from "drizzle-orm/pg-core";
import { organizations } from "./organization";

export const projects = pgTable(
  "projects",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    organizationId: uuid("organization_id")
      .notNull()
      .references(() => organizations.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    slug: text("slug").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("projects_org_slug_idx").on(table.organizationId, table.slug),
  ]
);
```

## 3. Mandatory Column Rules

### Primary Keys
- **Rule**: All table primary keys must be UUID v4 using `id: uuid("id").defaultRandom().primaryKey()`.
- **Reason**: Guarantees globally unique, non-guessable identifiers across distributed environments.

### Timestamps
- **Rule**: Always use `{ withTimezone: true }` for timestamp columns:
  ```typescript
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().$onUpdate(() => new Date()).notNull(),
  ```

### Foreign Keys
- **Rule**: Explicitly declare cascading or restriction rules with `.references(() => targetTable.id, { onDelete: "cascade" })`.

### Indexes
- **Rule**: Multi-column queries and scoped lookups (e.g., finding a project by `organizationId` + `slug`) must be backed by a composite index using the table configuration array `(table) => [index("...").on(...)]`.
