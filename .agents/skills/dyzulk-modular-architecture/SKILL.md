---
name: dyzulk-modular-architecture
description: "Apply this skill whenever creating new features, refactoring components, implementing hooks, writing server actions, or organizing folders across any Dyzulk application (web, dashboard, docs). Enforces strict modular separation between UI presentation, hooks, and actions according to the workspace tree blueprint."
license: MIT
metadata:
  author: dyzulk
---

# Dyzulk Modular Architecture

Guidelines and standards for maintaining strict modular separation and consistent folder hierarchies across the Dyzulk monorepo.

## Consistency First

Before writing code or placing files:
- Inspect existing folders in the target application (`src/app/`, `src/components/`, `src/hooks/`, `src/actions/`, `src/lib/`).
- Never write inline business logic, computations, or API requests inside React component files.
- Place shared logic in `packages/` and application-specific modular logic in their respective folders under `apps/<app_name>/src/`.

## How to Apply

1. Identify whether your code represents UI presentation, data typing, state orchestration, server actions, or shared utilities.
2. Consult the **Folder Structure** guide to identify the correct target folder.
3. Review the **Logic Separation** guide and **Do's and Don'ts** checklist before writing code.
4. Keep all UI components declarative, clean, and free of inline application logic.

## Rule Index

| Concern | Read |
| --- | --- |
| Directory blueprint and responsibilities of `apps/` and `packages/` | [`rules/folder-structure.md`](rules/folder-structure.md) |
| Decoupling UI presentation from hooks, state, actions, and types | [`rules/logic-separation.md`](rules/logic-separation.md) |
| Quick reference matrix of mandatory practices and prohibitions | [`rules/dos-and-donts.md`](rules/dos-and-donts.md) |

## Decision Rules

- **Strict UI-Only Views**: Components and layouts are presentation shells only.
- **No Size Exception**: Always extract logic, helpers, and types into their dedicated folders, regardless of file size.
- **Custom Hooks for State**: Any component state that involves async execution or multi-step logic must live in a custom hook in `hooks/`.
- **Targeted Placement**: Page-specific UI sections go in `components/<feature>/`, global UI primitives go in `packages/ui`.
