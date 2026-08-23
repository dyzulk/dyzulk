# Workspace Directory Structure

This document outlines the complete folder hierarchy across the Dyzulk monorepo. It displays all directory trees down to the deepest folder while omitting individual leaf implementation files to keep the representation clean and efficient.

```text
dyzulk/
├─ .agents/
│  ├─ rules/
│  └─ skills/
│     ├─ dyzulk-modular-architecture/
│     │  └─ rules/
│     ├─ dyzulk-monorepo-workflow/
│     │  └─ rules/
│     ├─ dyzulk-server-development/
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
│  │  │  │  │  ├─ applications/
│  │  │  │  │  │  ├─ create/
│  │  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  ├─ resources/
│  │  │  │  │  │  ├─ caches/
│  │  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  │  ├─ databases/
│  │  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  │  ├─ object-storage/
│  │  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  │  ├─ websockets/
│  │  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  │  ├─ layout.tsx
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  ├─ settings/
│  │  │  │  │  │  ├─ access/
│  │  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  │  ├─ api-tokens/
│  │  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  │  ├─ billing/
│  │  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  │  ├─ general/
│  │  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  │  ├─ invoices/
│  │  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  │  ├─ layout.tsx
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  ├─ usage/
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  ├─ layout.tsx
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ org/
│  │  │  │  │  └─ new/
│  │  │  │  │     └─ page.tsx
│  │  │  │  ├─ profile/
│  │  │  │  │  ├─ notifications/
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  ├─ organizations/
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  ├─ security/
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  ├─ source-control/
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  ├─ layout.tsx
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ error.tsx
│  │  │  │  ├─ layout.tsx
│  │  │  │  ├─ not-found.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ components/
│  │  │  │  ├─ org/
│  │  │  │  │  ├─ applications/
│  │  │  │  │  │  └─ create/
│  │  │  │  │  ├─ new/
│  │  │  │  │  ├─ resources/
│  │  │  │  │  │  ├─ caches/
│  │  │  │  │  │  ├─ databases/
│  │  │  │  │  │  ├─ object-storage/
│  │  │  │  │  │  └─ websockets/
│  │  │  │  │  ├─ settings/
│  │  │  │  │  │  ├─ access/
│  │  │  │  │  │  ├─ api-tokens/
│  │  │  │  │  │  ├─ billing/
│  │  │  │  │  │  ├─ general/
│  │  │  │  │  │  └─ invoices/
│  │  │  │  │  └─ usage/
│  │  │  │  ├─ profile/
│  │  │  │  │  ├─ general/
│  │  │  │  │  ├─ notifications/
│  │  │  │  │  ├─ organizations/
│  │  │  │  │  ├─ security/
│  │  │  │  │  └─ source-control/
│  │  │  │  ├─ workspace/
│  │  │  │  │  └─ layout/
│  │  │  │  └─ theme-provider.tsx
│  │  │  ├─ hooks/
│  │  │  ├─ lib/
│  │  │  └─ middleware.ts
│  │  ├─ next.config.ts
│  │  ├─ Dockerfile
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
│  │  ├─ Dockerfile
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
│     ├─ Dockerfile
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
│  │  │  ├─ lib/
│  │  │  ├─ repositories/
│  │  │  ├─ services/
│  │  │  ├─ types/
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
├─ DEPLOYMENT.md
├─ Dockerfile.workspace
├─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ STRUCTURE.md
├─ tsconfig.json
└─ turbo.json
```
