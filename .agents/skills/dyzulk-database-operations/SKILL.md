---
name: dyzulk-database-operations
description: "Apply this skill whenever creating, updating, or reviewing database schemas, relationships, indexes, or executing Drizzle ORM migrations inside packages/server."
license: MIT
metadata:
  author: dyzulk
---

# Dyzulk Database Operations

Best practices and workflow rules for schema management, migrations, and database operations using Drizzle ORM and PostgreSQL inside `packages/server`.

## Consistency First

Before creating new tables or altering schemas:
- Check existing table patterns in `packages/server/src/db/schema/` (e.g. `organization.ts`, `project.ts`).
- Adhere strictly to the established conventions: UUID primary keys (`defaultRandom()`), timestamp with timezone (`{ withTimezone: true }`), and cascade delete references.
- Re-export every new table schema from `packages/server/src/db/schema/index.ts`.

## How to Apply

1. Check existing schemas in `packages/server/src/db/schema/`.
2. Map your task to the relevant rule file in the index below.
3. Define or modify table schemas using standard Drizzle `pgTable` constructs.
4. Run `db:generate` to produce migration SQL or `db:push` for local synchronization.

## Rule Index

| Concern | Read |
| --- | --- |
| Schema definitions, column types, UUIDs, timestamps, and indexes | [`rules/drizzle-schemas.md`](rules/drizzle-schemas.md) |
| Generating migrations, pushing schema, and launching Drizzle Studio | [`rules/migrations-workflow.md`](rules/migrations-workflow.md) |

## Decision Rules

- **Standard UUIDs**: Every table must use `id: uuid("id").defaultRandom().primaryKey()`.
- **Explicit Foreign Key Cascades**: Always define `.references(() => parentTable.id, { onDelete: "cascade" })` or specify desired delete behavior explicitly.
- **Index Composite Columns**: Any multi-column query filter or organization-scoped slug must be backed by a composite index.
