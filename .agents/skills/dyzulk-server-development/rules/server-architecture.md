# Server Package Architecture & Layered Structure

This document defines the structural blueprint and layering rules for `@dyzulk/server` located in `packages/server`.

## Directory Blueprint

```text
packages/server/
├─ drizzle/                    # Generated SQL migrations and meta snapshots
│  └─ meta/
├─ src/
│  ├─ auth/                    # Specialized authentication & security engine
│  │  ├─ types.ts              # Auth domain models and session result types
│  │  ├─ password.ts           # Password hashing & verification
│  │  ├─ session.ts            # Session management lifecycle
│  │  ├─ verification.ts       # Verification tokens (magic links/OTPs)
│  │  └─ next-helpers.ts       # Next.js server cookie/header auth helpers
│  ├─ db/                      # Database configuration & ORM schemas
│  │  ├─ schema/               # Drizzle pgTable definitions
│  │  │  ├─ auth.ts
│  │  │  ├─ organization.ts
│  │  │  ├─ project.ts
│  │  │  └─ index.ts          # Schema aggregator
│  │  └─ db.ts                 # PostgreSQL pg Pool & Drizzle client instance
│  ├─ repositories/            # Data Access Layer (DAL)
│  │  ├─ organization.ts       # Organization table queries & CRUD
│  │  ├─ project.ts            # Project table queries & CRUD
│  │  └─ user.ts               # User table queries & CRUD
│  ├─ services/                # Business Logic Layer (BLL)
│  │  ├─ organization.ts       # Organization workflows & business validations
│  │  ├─ project.ts            # Project workflows & business validations
│  │  └─ auth.ts               # Auth orchestration
│  ├─ lib/                     # Pure utilities & cryptographic helpers
│  │  ├─ crypto.ts
│  │  └─ errors.ts             # Domain error classes (e.g. DomainError, NotFoundError)
│  ├─ types/                   # Shared domain interfaces & DTOs
│  │  ├─ common.ts
│  │  └─ index.ts
│  └─ index.ts                 # Main public package entrypoint
├─ drizzle.config.ts           # Drizzle Kit configuration
├─ package.json
└─ tsconfig.json
```

## Layer Responsibilities

### 1. Types Layer (`src/types/`)
- Define shared interfaces, DTOs (Data Transfer Objects), and schema inferences.
- Use Drizzle type helpers:
  ```typescript
  import type { InferSelectModel, InferInsertModel } from "drizzle-orm";
  import { organizations } from "../db/schema/organization";

  export type Organization = InferSelectModel<typeof organizations>;
  export type NewOrganization = InferInsertModel<typeof organizations>;
  ```
- **Rule**: Types must not import runtime logic or heavy dependencies.

### 2. Repositories Layer (`src/repositories/`)
- Pure Data Access Layer (DAL).
- Contains functions that execute Drizzle queries (`select`, `insert`, `update`, `delete`, `joins`).
- Every repository function should accept an optional transaction client (`tx?: DbTransaction`) to participate in broader transactions.
- **Rule**: Repositories MUST NOT contain business rules, permissions checks, or side effects (like sending emails or triggering external APIs).

### 3. Services Layer (`src/services/`)
- Core Business Logic Layer (BLL).
- Orchestrates one or more repositories to complete a business workflow.
- Enforces domain validation, permission logic, transaction boundaries (`db.transaction`), and side-effect coordination.
- **Rule**: Consumer apps (`apps/dashboard`, `apps/web`) should interact with the server package primarily through **Services**.

### 4. Libs / Utils Layer (`src/lib/`)
- Pure, stateless helper functions.
- Cryptography, token generation, string formatters, and custom domain errors.

### 5. Main Entrypoint (`src/index.ts`)
- Centralized re-export of all public APIs.
- Consumers import from `@dyzulk/server` using clean named exports:
  ```typescript
  // Database exports
  export { db } from "./db/db";
  export * from "./db/schema";

  // Repositories & Services
  export * from "./repositories/organization";
  export * from "./services/organization";

  // Authentication & Types
  export * from "./auth/types";
  export * from "./auth/password";
  export * from "./auth/session";
  export * from "./auth/next-helpers";
  ```

## Runtime Target Standard

- `@dyzulk/server` targets a standard **Node.js runtime** (`node:crypto`, `pg` Pool, long-lived connections).
- Do not constrain `@dyzulk/server` database or authentication helpers to Edge Runtime limitations.
