# Workspace Folder Structure Blueprint

Based on the actual project layout, the Dyzulk monorepo is divided into distinct application layers (`apps/`), shared domain packages (`packages/`), configuration engines, and utility tools.

---

## 1. Top-Level Directory Overview

```text
dyzulk/
├─ .agents/         # AI Assistant Customizations (Rules & Skills)
├─ .devcontainer/   # Docker containerized development environment
├─ apps/            # Deployable Next.js front-end applications
├─ packages/        # Shared internal workspace packages & backend modules
├─ scripts/         # Standalone developer tools & scraping utilities
├─ submodule/       # Git submodules
└─ traefik/         # Reverse proxy configuration
```

---

## 2. Front-End Applications (`apps/`)

### A. `apps/dashboard/` (PaaS Control Panel)
- **`src/app/`**: Next.js App Router routing shells only (`(auth)`, `[org]`, `new`). Strictly no business logic here.
- **`src/components/`**: Page-specific UI components grouped by feature (`new-org/`, `workspace/layout/`).
- **`src/actions/`**: Next.js Server Actions handling mutations and API calls (`auth.ts`, `organization.ts`).
- **`src/hooks/`**: Custom React hooks handling client state, event handlers, and form submissions (`use-login.ts`, `use-create-org.ts`, `use-workspace-layout.ts`).

### B. `apps/web/` (Marketing & Public Portal)
- **`src/app/`**: Route orchestrators (`(home)`, `pricing/`, `products/`).
- **`src/components/`**: Modular visual sections isolated per page (`home/`, `navigation/`, `pricing/`, `products/`).
- **`src/constants/`**: Static site configurations and navigation links (`navigation.ts`, `site.ts`).
- **`src/hooks/`, `src/lib/`, `src/styles/`**: Application-level hooks, helpers, and local style configurations.

### C. `apps/docs/` (Developer Documentation)
- **`content/docs/`**: MDX content and documentation pages.
- **`src/app/`**: Documentation route handlers (`docs/[[...slug]]`, `api/search`, `llms.txt`, `og/docs`).
- **`src/components/`**: MDX component renderers (`mdx.tsx`).
- **`src/lib/`**: Documentation helpers, source loaders, and layout utils.

---

## 3. Shared Workspace Packages (`packages/`)

### A. `packages/ui/` (Shared Component Library)
- **`src/components/`**: Monorepo-wide Shadcn UI components with strict Lyra theme (`rounded-none`).
- **`src/hooks/`**: UI-specific hooks (e.g. `use-mobile.ts`).
- **`src/lib/`**: Shared UI utilities (e.g. `cn()` in `utils.ts`).
- **`src/styles/globals.css`**: Global design tokens and semantic CSS variables.

### B. `packages/server/` (Backend, Database & Auth)
- **`src/auth/`**: Core authentication sessions, password hashing, verification, and Next.js auth helpers.
- **`src/db/schema/`**: Drizzle ORM schema definitions (`auth.ts`, `organization.ts`, `project.ts`, `service.ts`).
- **`drizzle/`**: Immutable SQL migration snapshots and metadata.

### C. `packages/eslint-config/` & `packages/typescript-config/`
- Shared compiler and linter rules across all workspace packages and applications.
