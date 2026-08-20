"use server";

import { eq, and, sql } from "drizzle-orm";
import { db, organizations, members, getServerSession } from "@dyzulk/server";

const RESERVED_SLUGS = new Set([
  "new",
  "login",
  "verify",
  "api",
  "settings",
  "admin",
  "auth",
  "public",
  "static",
  "dashboard",
  "projects",
  "billing",
  "members",
]);

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export async function createOrganizationAction(name: string) {
  if (!name || name.trim().length < 2) {
    return { success: false, error: "Nama organisasi minimal 2 karakter" };
  }

  const { session, account } = await getServerSession();
  if (!session || !account) {
    return { success: false, error: "Unauthorized" };
  }

  try {
    let baseSlug = slugify(name);
    if (!baseSlug) {
      baseSlug = "org";
    }

    if (RESERVED_SLUGS.has(baseSlug)) {
      return { success: false, error: "Nama organisasi mengandung kata kunci terlarang" };
    }

    // Ensure uniqueness of slug
    let slug = baseSlug;
    let counter = 1;
    while (true) {
      const existing = await db.query.organizations.findFirst({
        where: eq(organizations.slug, slug),
      });
      if (!existing) break;
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    // Insert organization and member within a transaction
    const newOrg = await db.transaction(async (tx) => {
      const [insertedOrg] = await tx
        .insert(organizations)
        .values({
          name,
          slug,
        })
        .returning();

      if (!insertedOrg) {
        throw new Error("Failed to insert organization");
      }

      await tx.insert(members).values({
        organizationId: insertedOrg.id,
        accountId: account.id,
        role: "owner",
      });

      return insertedOrg;
    });

    return { success: true, slug: newOrg.slug };
  } catch (error: any) {
    console.error("Failed to create organization:", error);
    return { success: false, error: "Gagal membuat organisasi. Silakan coba lagi." };
  }
}

export async function getUserOrganizationsAction() {
  const { session, account } = await getServerSession();
  if (!session || !account) {
    return { success: false, error: "Unauthorized", data: [] };
  }

  try {
    // Find organizations where account is a member
    const userOrgs = await db
      .select({
        id: organizations.id,
        name: organizations.name,
        slug: organizations.slug,
        role: members.role,
      })
      .from(organizations)
      .innerJoin(members, eq(organizations.id, members.organizationId))
      .where(eq(members.accountId, account.id));

    return { success: true, data: userOrgs };
  } catch (error: any) {
    console.error("Failed to fetch user organizations:", error);
    return { success: false, error: "Gagal memuat daftar organisasi.", data: [] };
  }
}

export async function getOrganizationBySlugAction(slug: string) {
  const { session, account } = await getServerSession();
  if (!session || !account) {
    return { success: false, error: "Unauthorized", data: null };
  }

  try {
    const orgResult = await db
      .select({
        id: organizations.id,
        name: organizations.name,
        slug: organizations.slug,
        role: members.role,
      })
      .from(organizations)
      .innerJoin(members, eq(organizations.id, members.organizationId))
      .where(and(eq(organizations.slug, slug), eq(members.accountId, account.id)))
      .limit(1);

    if (orgResult.length === 0) {
      return { success: false, error: "Organisasi tidak ditemukan atau Anda tidak memiliki akses.", data: null };
    }

    return { success: true, data: orgResult[0] };
  } catch (error: any) {
    console.error("Failed to fetch organization details by slug:", error);
    return { success: false, error: "Gagal memuat detail organisasi.", data: null };
  }
}

