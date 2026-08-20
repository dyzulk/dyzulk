import { pgTable, text, uuid, timestamp, uniqueIndex } from "drizzle-orm/pg-core";
import { projects } from "./project";

// Sub-services (Database, Cache, Coming-soon)
export const subServices = pgTable("sub_services", {
  id: uuid("id").defaultRandom().primaryKey(),
  projectId: uuid("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),
  type: text("type").notNull(), // "database", "cache", "coming-soon"
  name: text("name").notNull(),
  slug: text("slug").notNull(), // Unique within project
  status: text("status").notNull().default("provisioning"), // provisioning, active, suspended, deleted
  config: text("config"), // JSON configuration string for credentials/metadata
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => [
  uniqueIndex("service_project_slug_idx").on(table.projectId, table.slug)
]);
