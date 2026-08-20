<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Workspace Architecture & Directory Blueprint

For the complete layout of all apps, packages, and folders, refer to [STRUCTURE.md](./STRUCTURE.md).

For domain-specific task execution, activate the specialized skills located under `.agents/skills/`:
- [`dyzulk-ui-development`](.agents/skills/dyzulk-ui-development/SKILL.md)
- [`dyzulk-modular-architecture`](.agents/skills/dyzulk-modular-architecture/SKILL.md)
- [`dyzulk-server-development`](.agents/skills/dyzulk-server-development/SKILL.md)
- [`dyzulk-monorepo-workflow`](.agents/skills/dyzulk-monorepo-workflow/SKILL.md)

---

# Icon Usage Guidelines (`lucide-react` vs `@icons-pack/react-simple-icons`)

- **UI & System Icons (`lucide-react`)**: Use strictly for generic UI components, system actions, and navigation (e.g. `ArrowRight`, `Layers`, `ShieldCheck`, `Check`, `Sparkles`, `Globe`, `Cpu`, `Database`, `Terminal`).
  - **DO NOT** import brand/social logos from `lucide-react` (e.g. `Github`, `Twitter`, `Facebook`, `Discord`, `Google`, `Slack`).
- **Brand, Social & Tech Stack Icons (`@icons-pack/react-simple-icons`)**: Use strictly for company logos, technology stack logos, and social media platforms.
  - Component names start with `Si` followed by PascalCase brand name (e.g., `SiGithub`, `SiX`, `SiDiscord`, `SiNextdotjs`, `SiReact`, `SiTurborepo`, `SiTailwindcss`, `SiCloudflare`, `SiRender`, `SiPostgresql`, `SiDocker`).
- **Styling**: Always use Tailwind `size-*` classes (e.g. `size-4`, `size-5`) and theme text color classes (`text-muted-foreground hover:text-foreground`).
- **Strict Prohibition of Emojis**: **DO NOT** use raw emojis (e.g. 🚀, ⚡, 📦, 🔒, 🔥) as icons, status indicators, badges, or decorative visual symbols in UI components. Always use corresponding SVG icons from `lucide-react`.

---

# Front-end Development Guidelines

- **Explicit Page Composition**: Main pages (`page.tsx`) must always explicitly list and call the rendered child components directly in the page body (e.g., `<HeroSection />`, `<TerminalPreview />`) instead of concealing them behind dynamic routing or bloated layout hierarchies. **DO NOT write direct UI code or layouts in `page.tsx`.** All page UIs must be constructed from isolated page-specific components located in their respective components directory (e.g., `apps/web/src/components/home/`).
- **Shadcn UI Monorepo Components & Protection**:
  - Always use UI components from the monorepo's shared packages (`@dyzulk/ui/components/...`).
  - **Protected Directory**: `packages/ui/src/components/` is strictly for official Shadcn UI components managed via CLI (`pnpm dlx shadcn@latest add <component> -c apps/web`).
  - **DO NOT touch, rewrite, modify, or delete** existing Shadcn UI components in `packages/ui/src/components/`.
  - **DO NOT add non-Shadcn or custom components** to `packages/ui/src/components/`. Keep all custom components inside their respective app's `components/` directory.
- **No Raw CSS Component Overrides**: Do not override default style configurations of UI components via custom CSS styles or files. Use utility classes (Tailwind CSS) or customize the theme configuration.
- **Strict Zero Rounded (Flat Design) Rule**: This codebase uses the flat **Lyra theme**. All UI elements—including buttons, cards, menus, accordions, inputs, AND manual layouts (like `div` containers, wrappers, or grids)—must have **square corners** (`rounded-none`).
  - **DO NOT** use `rounded`, `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl` on any structural or layout element.
  - The **ONLY** exception is for naturally circular elements (such as `Avatar`, `Switch`, checkboxes, or status dot indicators) which should use `rounded-full`.
- **Strict Modularity Rule**: All applications (`web`, `docs`, `dashboard`) must maintain absolute modular separation. Types, helper libraries, API calls, custom logic, and reusable hooks MUST be written in their respective modular folders (e.g., `types/`, `lib/`, `hooks/`, `actions/`) rather than being defined inline inside pages, layouts, or components.
  - **No Logic in UI Files**: Pages, components, and layouts are **strictly forbidden** from containing any application logic, state-manipulation functions, event handlers definition, API calls, or computations. They must be purely UI/presentational shells. All such logic must be delegated to hooks or external modules.
  - This rule is strict and applies even if the code contains only a single function or 3 lines of code. No logic should clutter components, layout, or page files.

---

# Server Package Architecture Guidelines (`@dyzulk/server`)

- **Layered Architecture Enforcement**: All backend features developed within `packages/server` must strictly separate concerns across distinct layers:
  - **`types/`**: Shared interfaces, DTOs, and schema inferences (`InferSelectModel`, `InferInsertModel`).
  - **`repositories/`**: Data Access Layer (DAL) focusing solely on Drizzle ORM queries, CRUD, joins, and filters. Repositories accept an optional `tx` client for transactions and MUST NOT contain business rules or side effects.
  - **`services/`**: Business Logic Layer (BLL) coordinating domain validations, multi-table transactions (`db.transaction`), business error normalization, and side effects. Consumer apps (`apps/dashboard`, `apps/web`) call services or auth helpers, never raw table queries.
  - **`lib/`**: Pure utility functions (cryptography, token generators, custom domain error classes).
  - **`db/schema/`**: Drizzle schema definitions using UUID v4 primary keys (`defaultRandom()`), timestamp with timezone (`{ withTimezone: true }`), and explicit cascading relations (`onDelete: "cascade"`).
  - **`auth/`**: Authentication engine managing session lifecycles (30-day sliding expiry), password hashing, verification tokens, and Next.js cookie helpers.

---

# Runtime Target Rules

- **Standard Node.js Runtime Only**: The applications in this workspace (especially the dashboard) are built and deployed to run on a standard Node.js server environment.
  - **DO NOT** assume serverless environment constraints or limitations.
  - **DO NOT** limit Next.js API routes, actions, or middleware to Edge Runtime unless explicitly required for specific micro-features. Full Node.js APIs (like `pg` Pool connections) are fully supported and should be used directly in server components and server actions.

---

# Strict Cross-Platform Relative Path & Module Namespace Rule

- **Prohibition of Machine-Specific Absolute Paths**:
  - **DO NOT** write machine-specific or absolute local filesystem paths in any documentation, markdown link, script, or source code across any operating system:
    - ❌ Linux: `/home/...`, `file:///home/...`
    - ❌ Windows: `C:\...`, `file:///C:/...`
    - ❌ macOS: `/Users/...`, `file:///Users/...`
- **Documentation & File Links**: Always use standard repository-relative paths (`./...` or `../...`).
- **Code Imports**: Always use the official declared module namespace aliases configured in `tsconfig.json` or the workspace (e.g. `@dyzulk/ui/...`, `@dyzulk/server`, `@/...`) instead of arbitrary multi-level relative path traversals or broken paths.

