# Modular Architecture: Do's and Don'ts

A rapid reference checklist for maintaining strict modular integrity across the Dyzulk monorepo.

---

## Architecture Matrix

| Concern | DO ✅ | DON'T ❌ |
| :--- | :--- | :--- |
| **Next.js Pages (`page.tsx`)** | Keep `page.tsx` as a declarative shell importing modular child sections. | Do not write inline HTML, layout containers, or state declarations in `page.tsx`. |
| **Component Presentation** | Make components pure visual presentation shells that accept props and hooks. | Do not perform direct `fetch()` calls, SQL queries, or complex data processing in components. |
| **State & Event Handlers** | Extract all multi-step state, form handling, and event listeners into `hooks/`. | Do not write inline async functions or complex event handlers inside JSX elements. |
| **Server Actions & APIs** | Place all mutation endpoints and database interactions in `actions/` or `packages/server/`. | Do not call server mutations directly from component bodies without action boundaries. |
| **Types & Interfaces** | Extract all TypeScript types, props interfaces, and data models to `types/`. | Do not define inline type definitions or declare multiple complex types inside UI files. |
| **UI Components Placement** | Place reusable design-system components in `packages/ui` and page-specific sections in `components/<feature>/`. | Do not duplicate shared components inside local app folders. |
| **Shadcn UI Components (`packages/ui/src/components/`)** | Treat `packages/ui/src/components/` as a protected directory. Add new components exclusively via CLI: `pnpm dlx shadcn@latest add <component> -c apps/web`. | **DO NOT touch, modify, rewrite, delete, or add non-shadcn components** inside `packages/ui/src/components/`. Place non-shadcn custom components in `apps/<app>/src/components/`. |
| **File Size Exceptions** | Extract helpers and types into separate files even if they are only 1-3 lines long. | Do not leave "small" helpers or inline types in UI files under the excuse of simplicity. |
| **Design System Radius** | Use `rounded-none` for all buttons, cards, containers, and inputs. | Do not use `rounded-md`, `rounded-lg`, etc., on structural layout elements. |
| **Icon Libraries** | Use `lucide-react` for system actions and `@icons-pack/react-simple-icons` for brand logos. | Do not attempt to import brand logos from `lucide-react`. **DO NOT use raw emojis as UI icons, status indicators, or decorative symbols.** |
| **Paths & Module Namespaces** | Use standard Git-relative paths (`./...`, `../...`) for markdown links, and declared module namespaces (`@dyzulk/ui/...`, `@dyzulk/server/...`, `@/...`) for code imports. | **DO NOT write machine-specific absolute paths** (`file:///...`, `/home/...`, `C:\...`, `/Users/...`) in documentation or source code. |

