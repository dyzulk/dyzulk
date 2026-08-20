---
name: dyzulk-server-development
description: "Apply this skill whenever developing, modifying, or reviewing backend logic, services, repositories, database schemas/migrations, authentication, or types inside packages/server (@dyzulk/server)."
license: MIT
metadata:
  author: dyzulk
---

# Dyzulk Server Development (@dyzulk/server)

Guidelines, conventions, and architectural patterns for backend development in `@dyzulk/server`. Enforces clean layered architecture—separating Types, Repositories (Data Access), Services (Business Logic), Libs/Utils, Database (Drizzle ORM & Migrations), and Authentication.

## Core Architectural Layers

All backend features must adhere to the layered separation of concerns:

```text
┌────────────────────────────────────────────────────────┐
│               Consumer (apps/dashboard, apps/web)      │
└───────────────────────────▲────────────────────────────┘
                            │ (Server Actions / Route Handlers)
┌───────────────────────────┴────────────────────────────┐
│  @dyzulk/server Public API (src/index.ts)              │
├────────────────────────────────────────────────────────┤
│  Services (Business Logic Layer)                       │
│  - Domain validation, business workflows, transactions │
├────────────────────────────────────────────────────────┤
│  Repositories (Data Access Layer)                      │
│  - Isolated Drizzle ORM queries, CRUD, joins, filters  │
├────────────────────────────────────────────────────────┤
│  Database & Schemas (Drizzle ORM & Postgres Pool)      │
│  - pgTable definitions, UUIDs, indexes, migrations     │
├────────────────────────────────────────────────────────┤
│  Libs & Utils (Crypto, Sessions, Helpers, Hashing)     │
│  Types (Domain Models, DTOs, Inferred Schema Types)    │
└────────────────────────────────────────────────────────┘
```

## How to Apply

1. **Plan Feature Layering**: Identify required database tables, types, repository queries, and service-level workflows before writing code.
2. **Consult Sub-Rules**: Map your specific server task to the relevant guide in the **Rule Index** below.
3. **Keep Repositories Clean**: Never embed business validation or side effects inside repositories.
4. **Keep Services Pure**: Encapsulate all business rules, transaction boundaries (`db.transaction`), and domain exceptions inside services.
5. **Re-export Public Contracts**: Expose necessary services, repositories, types, and schemas cleanly through `packages/server/src/index.ts`.

## Rule Index

| Concern | Rule Guide |
| --- | --- |
| Layered architecture, folder layout, Node.js runtime, and package exports | [`rules/server-architecture.md`](rules/server-architecture.md) |
| Repositories (Data Access Layer) & Services (Business Logic Layer) | [`rules/business-logic-and-services.md`](rules/business-logic-and-services.md) |
| Drizzle schema definitions, UUIDs, timestamps, relations, and indexes | [`rules/drizzle-schemas.md`](rules/drizzle-schemas.md) |
| Generating migrations, schema synchronization, and Drizzle Studio | [`rules/migrations-workflow.md`](rules/migrations-workflow.md) |
| Authentication, session lifecycle, password security, and Next.js helpers | [`rules/auth-and-security.md`](rules/auth-and-security.md) |

## Key Decision Rules

- **Strict Layering**: Consumer apps (`apps/dashboard`, `apps/web`) call **Services** or **Auth Helpers** from `@dyzulk/server`. UI components never execute raw database queries or direct table mutations.
- **Transaction Propagation**: Multi-entity mutations must use Drizzle transactions (`db.transaction(async (tx) => ...)`), passing the transaction client `tx` to relevant repository methods.
- **Schema Standards**: Every table must use standard UUID primary keys (`id: uuid("id").defaultRandom().primaryKey()`) and timestamps with timezone (`timestamp("created_at", { withTimezone: true })`).
- **Standard Node.js Runtime**: `@dyzulk/server` operates on a standard Node.js server environment. Do not constrain database or auth code to edge runtimes.
- **Single Backend Package Standard**: `@dyzulk/server` is the single source of truth for ALL backend logic across the workspace (including database ORM, services, authentication, email sending, Docker management, and system scripts). Do not create new packages to keep `@dyzulk/server` lightweight; all backend features reside here, matching the Dokploy submodule architecture.
