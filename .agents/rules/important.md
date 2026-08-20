---
trigger: always_on
---

# Critical Agent Execution Rules & Skill Alignment

This document outlines mandatory guidelines for AI agents working within the Dyzulk monorepo.

---

## 1. Mandatory `AGENTS.md` Alignment

Before planning, executing, or proposing any changes, you must review and strictly follow all rules defined in [AGENTS.md](../../AGENTS.md):
- **Lyra Flat Theme**: Strictly zero rounded corners (`rounded-none`) on all layout and structural UI elements.
- **Icon Usage Rules**: Strictly `lucide-react` for UI/system icons and `@icons-pack/react-simple-icons` for tech/brand/social icons. No raw emojis.
- **Explicit Page Composition**: Clean presentational `page.tsx` calling isolated components directly. No complex inline layouts or inline logic in pages/components.
- **Strict Modularity**: 100% separation between UI presentation, custom hooks (`hooks/`), server actions (`actions/`), and business logic.
- **Server Package Layering**: Strict adherence to `@dyzulk/server` layers (`types`, `repositories`, `services`, `lib`, `db/schema`, `auth`).
- **Standard Node.js Runtime**: Full Node.js server APIs without edge runtime constraints.
- **Prohibition of Machine-Specific Absolute Paths**: Always use repository-relative paths (`./...`, `../...`) and tsconfig aliases (`@/...`, `@dyzulk/ui/...`, `@dyzulk/server`).

---

## 2. Mandatory Skill Activation Before Execution

Always map the current task to the corresponding skill under `.agents/skills/` and consult its `SKILL.md` and sub-rules before writing code:

| Task Domain | Active Skill |
| --- | --- |
| UI components, Shadcn UI, pages, themes, styling, layouts | [`.agents/skills/dyzulk-ui-development/SKILL.md`](../skills/dyzulk-ui-development/SKILL.md) |
| Feature directory structure, hooks, actions, logic separation | [`.agents/skills/dyzulk-modular-architecture/SKILL.md`](../skills/dyzulk-modular-architecture/SKILL.md) |
| Backend services, repositories, schemas, migrations, auth | [`.agents/skills/dyzulk-server-development/SKILL.md`](../skills/dyzulk-server-development/SKILL.md) |
| Monorepo commands, builds, typechecks, dependencies, Turbo | [`.agents/skills/dyzulk-monorepo-workflow/SKILL.md`](../skills/dyzulk-monorepo-workflow/SKILL.md) |

---

## 3. Directory Blueprint Consistency

Always reference [STRUCTURE.md](../../STRUCTURE.md) for the monorepo directory layout. Do not invent new top-level directories or violate the established package/app structure.
