# Drizzle Migrations & Database Operations

Workflow rules for generating, applying, and inspecting database schema changes in `@dyzulk/server`.

## Available Scripts

Run these scripts from the repository root:

| Command | Action | Description |
| --- | --- | --- |
| `pnpm --filter @dyzulk/server db:generate` | Generate SQL Migration | Compares schema changes and creates a new `.sql` file in `packages/server/drizzle/` |
| `pnpm --filter @dyzulk/server db:push` | Direct Schema Push | Pushes schema changes directly to the PostgreSQL database (ideal for rapid local development) |
| `pnpm --filter @dyzulk/server db:studio` | Launch Drizzle Studio | Opens the visual database management GUI in the browser |

## Standard Migration Flow

1. **Modify Schema**: Update or create schemas in `packages/server/src/db/schema/`.
2. **Re-export**: Ensure all new tables/enums are exported in `packages/server/src/db/schema/index.ts`.
3. **Generate Migration**:
   ```bash
   pnpm --filter @dyzulk/server db:generate
   ```
4. **Inspect Generated SQL**: Review the migration file generated in `packages/server/drizzle/` to confirm accurate table definitions, foreign keys, and indexes.
5. **Sync Database**: Apply changes using `db:push` or your database migration runner.
