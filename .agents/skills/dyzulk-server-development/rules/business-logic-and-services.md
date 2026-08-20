# Business Logic, Repositories, and Services

This guide provides concrete rules and coding patterns for writing Repositories and Services within `@dyzulk/server`.

## Repositories vs Services Distinction

| Dimension | Repository (Data Access Layer) | Service (Business Logic Layer) |
| --- | --- | --- |
| **Primary Goal** | Querying, inserting, updating DB tables | Executing complete business workflows |
| **Dependencies** | Drizzle ORM schemas, `db` or `tx` instance | Repositories, Libs, Auth, Transaction boundaries |
| **Logic** | Filters, order by, limit, joins, pagination | Validations, authorizations, business rules |
| **Transactions** | Receives optional `tx` client | Initiates and manages `db.transaction` |
| **Consumers** | Consumed by Services | Consumed by Server Actions, Route Handlers |

---

## 1. Repository Pattern (DAL)

A repository function focuses strictly on database interaction. Always allow an optional `tx` parameter so the query can participate in an external transaction.

```typescript
// packages/server/src/repositories/organization.ts
import { eq } from "drizzle-orm";
import { db } from "../db/db";
import { organizations } from "../db/schema/organization";
import type { NewOrganization, Organization } from "../types";

type DbClient = typeof db;

export async function findOrganizationById(
  id: string,
  client: DbClient = db
): Promise<Organization | null> {
  const [result] = await client
    .select()
    .from(organizations)
    .where(eq(organizations.id, id))
    .limit(1);

  return result ?? null;
}

export async function findOrganizationBySlug(
  slug: string,
  client: DbClient = db
): Promise<Organization | null> {
  const [result] = await client
    .select()
    .from(organizations)
    .where(eq(organizations.slug, slug))
    .limit(1);

  return result ?? null;
}

export async function insertOrganization(
  data: NewOrganization,
  client: DbClient = db
): Promise<Organization> {
  const [result] = await client
    .insert(organizations)
    .values(data)
    .returning();

  if (!result) {
    throw new Error("Failed to insert organization");
  }

  return result;
}
```

---

## 2. Service Pattern (BLL)

A service coordinates business validation, multi-table operations within a transaction, and error normalization.

```typescript
// packages/server/src/services/organization.ts
import { db } from "../db/db";
import {
  findOrganizationBySlug,
  insertOrganization,
} from "../repositories/organization";
import type { Organization } from "../types";

export interface CreateOrganizationInput {
  name: string;
  slug: string;
  creatorAccountId: string;
}

export async function createOrganizationService(
  input: CreateOrganizationInput
): Promise<Organization> {
  // 1. Business Validation
  const slugClean = input.slug.toLowerCase().trim();
  if (slugClean.length < 3) {
    throw new Error("Organization slug must be at least 3 characters");
  }

  // 2. Uniqueness Check
  const existing = await findOrganizationBySlug(slugClean);
  if (existing) {
    throw new Error(`Organization slug "${slugClean}" is already in use`);
  }

  // 3. Multi-Step Transaction
  return await db.transaction(async (tx) => {
    // Insert organization entity
    const org = await insertOrganization(
      {
        name: input.name.trim(),
        slug: slugClean,
      },
      tx
    );

    // Optional: Add creator as owner/member in the same transaction
    // await insertOrganizationMember({ organizationId: org.id, accountId: input.creatorAccountId, role: "owner" }, tx);

    return org;
  });
}
```

---

## 3. Transaction Propagation Standard

When a service performs operations spanning multiple repositories:
1. Always open a transaction at the **Service layer** using `db.transaction(async (tx) => { ... })`.
2. Pass the transaction object `tx` to every repository call executed within that scope.
3. If any step throws an error, Drizzle will automatically roll back all mutations performed within the transaction.

---

## 4. Error Handling & Result Predictability

- Never let unhandled database driver errors leak directly to client components.
- Use explicit, actionable error messages or custom domain exceptions (e.g. `NotFoundError`, `ConflictError`, `ValidationError`).
- Keep services returning pure JavaScript objects/arrays that serialize cleanly across Server Action boundaries.
