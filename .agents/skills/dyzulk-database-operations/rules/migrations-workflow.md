# Drizzle ORM Migrations & DB Workflow

## 1. Generating SQL Migrations

Whenever database schemas are modified in `packages/server/src/db/schema/`, generate a migration SQL snapshot:

```bash
# From workspace root:
pnpm --filter @dyzulk/server db:generate
```

This creates a new migration file inside `packages/server/drizzle/`.

---

## 2. Pushing Schema Changes (Development)

During rapid prototyping or local development, you can sync the schema changes directly with the development PostgreSQL database without generating a full migration file:

```bash
# Push schema directly to database
pnpm --filter @dyzulk/server db:push
```

---

## 3. Database Inspection via Drizzle Studio

To inspect data, inspect tables, and test queries visually:

```bash
pnpm --filter @dyzulk/server db:studio
```

---

## Decision Matrix: `db:push` vs `db:generate`

| Scenario | Command to Use | Rationale |
| --- | --- | --- |
| Rapid local schema prototyping | `pnpm --filter @dyzulk/server db:push` | Fast iteration, automatically applies changes to local database. |
| Production-ready / Version-controlled schema updates | `pnpm --filter @dyzulk/server db:generate` | Creates immutable SQL migration artifacts in `drizzle/` for review and deployment. |
