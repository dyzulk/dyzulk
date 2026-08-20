# Workspace Directory Structure

This document outlines the complete folder hierarchy across the Dyzulk monorepo. It displays all directory trees down to the deepest folder while omitting individual leaf implementation files to keep the representation clean and efficient.

```text
dyzulk/
├─ .agents/
│  └─ skills/
│     ├─ dyzulk-database-operations/
│     │  └─ rules/
│     ├─ dyzulk-modular-architecture/
│     │  └─ rules/
│     ├─ dyzulk-monorepo-workflow/
│     │  └─ rules/
│     └─ dyzulk-ui-development/
│        └─ rules/
├─ .devcontainer/
├─ apps/
│  ├─ dashboard/
│  │  ├─ public/
│  │  ├─ src/
│  │  │  ├─ actions/
│  │  │  ├─ app/
│  │  │  │  ├─ (auth)/
│  │  │  │  │  ├─ login/
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  ├─ verify/
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  └─ layout.tsx
│  │  │  │  ├─ [org]/
│  │  │  │  │  ├─ layout.tsx
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ new/
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ error.tsx
│  │  │  │  ├─ layout.tsx
│  │  │  │  ├─ loading.tsx
│  │  │  │  ├─ not-found.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ components/
│  │  │  │  ├─ new-org/
│  │  │  │  ├─ workspace/
│  │  │  │  │  └─ layout/
│  │  │  │  └─ theme-provider.tsx
│  │  │  ├─ hooks/
│  │  │  └─ middleware.ts
│  │  ├─ next.config.ts
│  │  └─ package.json
│  ├─ docs/
│  │  ├─ content/
│  │  │  └─ docs/
│  │  ├─ public/
│  │  ├─ src/
│  │  │  ├─ app/
│  │  │  │  ├─ (home)/
│  │  │  │  │  ├─ layout.tsx
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ api/
│  │  │  │  │  └─ search/
│  │  │  │  ├─ docs/
│  │  │  │  │  ├─ [[...slug]]/
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  └─ layout.tsx
│  │  │  │  ├─ llms-full.txt/
│  │  │  │  ├─ llms.mdx/
│  │  │  │  │  └─ docs/
│  │  │  │  │     └─ [[...slug]]/
│  │  │  │  ├─ llms.txt/
│  │  │  │  ├─ og/
│  │  │  │  │  └─ docs/
│  │  │  │  │     └─ [...slug]/
│  │  │  │  ├─ global.css
│  │  │  │  └─ layout.tsx
│  │  │  ├─ components/
│  │  │  └─ lib/
│  │  ├─ next.config.mjs
│  │  └─ package.json
│  └─ web/
│     ├─ public/
│     ├─ src/
│     │  ├─ app/
│     │  │  ├─ (home)/
│     │  │  │  └─ page.tsx
│     │  │  ├─ pricing/
│     │  │  │  └─ page.tsx
│     │  │  ├─ products/
│     │  │  │  └─ page.tsx
│     │  │  ├─ error.tsx
│     │  │  ├─ global-error.tsx
│     │  │  ├─ layout.tsx
│     │  │  ├─ loading.tsx
│     │  │  └─ not-found.tsx
│     │  ├─ components/
│     │  │  ├─ home/
│     │  │  ├─ navigation/
│     │  │  ├─ pricing/
│     │  │  ├─ products/
│     │  │  └─ theme-provider.tsx
│     │  ├─ constants/
│     │  ├─ hooks/
│     │  ├─ lib/
│     │  └─ styles/
│     ├─ next.config.ts
│     └─ package.json
├─ packages/
│  ├─ eslint-config/
│  │  └─ package.json
│  ├─ server/
│  │  ├─ drizzle/
│  │  │  └─ meta/
│  │  ├─ src/
│  │  │  ├─ auth/
│  │  │  ├─ db/
│  │  │  │  └─ schema/
│  │  │  └─ index.ts
│  │  ├─ drizzle.config.ts
│  │  └─ package.json
│  ├─ typescript-config/
│  │  └─ package.json
│  └─ ui/
│     ├─ src/
│     │  ├─ components/
│     │  ├─ hooks/
│     │  ├─ lib/
│     │  └─ styles/
│     │     └─ globals.css
│     ├─ components.json
│     └─ package.json
├─ scripts/
│  └─ tools/
├─ submodule/
├─ traefik/
│  └─ traefik.yml
├─ AGENTS.md
├─ Dockerfile
├─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ STRUCTURE.md
├─ tsconfig.json
└─ turbo.json
```
