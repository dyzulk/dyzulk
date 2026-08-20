---
name: dyzulk-monorepo-workflow
description: "Apply this skill whenever running dev servers, building the project, performing linting or typechecks, or managing internal and external dependencies across the Dyzulk monorepo using pnpm and Turborepo."
license: MIT
metadata:
  author: dyzulk
---

# Dyzulk Monorepo Workflow

Best practices and command references for managing Turborepo and pnpm workspaces across all Dyzulk applications and packages.

## Consistency First

Before adding dependencies or executing build pipelines:
- Inspect root and package-level `package.json` configurations.
- Use root-level scripts (`pnpm dev:web`, `pnpm dev:dashboard`, `pnpm typecheck`, `pnpm lint`) rather than navigating directly into child directories.
- Always use the `"workspace:*"` protocol when linking internal monorepo packages.

## How to Apply

1. Check the target application or package in `apps/` or `packages/`.
2. Review the command index below for the exact command syntax.
3. Use pnpm workspace filter commands (`--filter <name>`) to isolate tasks when working on a single package.
4. Run workspace typechecks and lints before finishing complex cross-package updates.

## Rule Index

| Concern | Read |
| --- | --- |
| Turborepo commands, dev servers, builds, typechecks, and dependency management | [`rules/turborepo-commands.md`](rules/turborepo-commands.md) |

## Decision Rules

- **Use Workspace Filters**: Prefer targeted filter commands (e.g. `pnpm dev:dashboard`) to conserve resources during local development.
- **Strict Workspace Protocol**: Never hardcode version numbers when linking internal packages; use `"workspace:*"`.
