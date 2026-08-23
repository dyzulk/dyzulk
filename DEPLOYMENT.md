# Dyzulk Monorepo — Coolify Deployment Guide

Deployment guide for the Dyzulk monorepo to Coolify with three available build strategies.

---

## Strategy Comparison

| Aspect | Dockerfile (Recommended) | Railpack | Nixpacks |
|---|---|---|---|
| Subsequent build speed | Fastest (Docker layer cache) | Moderate | Moderate |
| Image size | ~150MB (standalone) | ~1GB+ (full monorepo) | ~800MB+ |
| Control | Full | Limited | Moderate (nixpacks.toml) |
| Setup complexity | Requires maintaining Dockerfiles | Zero config | Minimal config |
| Monorepo support | Native (multi-stage) | Custom commands | Custom commands |

---

## Prerequisites (All Strategies)

Create **1 Project** in Coolify (e.g. `Dyzulk Cloud`), then create **3 separate Applications** inside it — all pointing to the **same repository**:

```
Coolify Project: Dyzulk Cloud
  Application: dyzulk-web        -> dyzulk.com
  Application: dyzulk-dashboard  -> dash.dyzulk.com
  Application: dyzulk-docs       -> docs.dyzulk.com
```

---

# Strategy 1: Dockerfile (Recommended)

## Required Code Changes

### 1. Enable `output: "standalone"` in every `next.config`

Required so Docker images only contain necessary files.

**`apps/web/next.config.ts`** and **`apps/dashboard/next.config.ts`**:

```typescript
import type { NextConfig } from "next"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: join(__dirname, "../../"),
  transpilePackages: ["@dyzulk/ui"],
}

export default nextConfig
```

**`apps/docs/next.config.mjs`**:

```javascript
import { createMDX } from 'fumadocs-mdx/next';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const withMDX = createMDX();

const config = {
  reactStrictMode: true,
  output: 'standalone',
  outputFileTracingRoot: join(__dirname, '../../'),
};

export default withMDX(config);
```

`outputFileTracingRoot` must point to the **monorepo root** (`../../` from `apps/<app>/`). Without this, Next.js standalone will not include shared packages (`@dyzulk/ui`, `@dyzulk/server`).

### 2. Dockerfile per app

Located at:

- `apps/web/Dockerfile`
- `apps/dashboard/Dockerfile`
- `apps/docs/Dockerfile`

Each Dockerfile has 4 stages:

```
Stage 1: base     - Node 24 + Corepack pnpm@11
Stage 2: deps     - Copy package.json files + pnpm install (CACHED layer)
Stage 3: builder  - Copy source + turbo build --filter=<app>...
Stage 4: runner   - Copy standalone output only (~150MB final image)
```

## Coolify Configuration

### dyzulk-web

| Setting | Value |
|---|---|
| Build strategy | Dockerfile |
| Dockerfile location | `apps/web/Dockerfile` |
| Base directory | `/` |
| Port | `3000` |
| Domain | `dyzulk.com` |

### dyzulk-dashboard

| Setting | Value |
|---|---|
| Build strategy | Dockerfile |
| Dockerfile location | `apps/dashboard/Dockerfile` |
| Base directory | `/` |
| Port | `3000` |
| Domain | `dash.dyzulk.com` |

### dyzulk-docs

| Setting | Value |
|---|---|
| Build strategy | Dockerfile |
| Dockerfile location | `apps/docs/Dockerfile` |
| Base directory | `/` |
| Port | `3000` |
| Domain | `docs.dyzulk.com` |

---

# Strategy 2: Railpack

## Required Code Changes

**None** — Railpack auto-detects Next.js. No `output: "standalone"` or Dockerfile needed.

If `output: "standalone"` is already set in next.config (from a Dockerfile setup), **remove or comment out** both `output` and `outputFileTracingRoot` before using Railpack. Railpack runs `next start` which requires full `node_modules`, not the standalone server.

## Coolify Configuration

### dyzulk-web

| Setting | Value |
|---|---|
| Build strategy | Railpack |
| Site type | Dynamic |
| Base directory | `/` |
| Publish directory | `/` |
| Install command | `pnpm install --frozen-lockfile` |
| Build command | `pnpm build:web` |
| Start command | `pnpm --filter web start` |
| Port | `3000` |
| Domain | `dyzulk.com` |

### dyzulk-dashboard

| Setting | Value |
|---|---|
| Build strategy | Railpack |
| Site type | Dynamic |
| Base directory | `/` |
| Publish directory | `/` |
| Install command | `pnpm install --frozen-lockfile` |
| Build command | `pnpm build:dashboard` |
| Start command | `pnpm --filter dashboard start` |
| Port | `3000` |
| Domain | `dash.dyzulk.com` |

### dyzulk-docs

| Setting | Value |
|---|---|
| Build strategy | Railpack |
| Site type | Dynamic |
| Base directory | `/` |
| Publish directory | `/` |
| Install command | `pnpm install --frozen-lockfile` |
| Build command | `pnpm build:docs` |
| Start command | `pnpm --filter docs start` |
| Port | `3000` |
| Domain | `docs.dyzulk.com` |

Base directory must be `/` (monorepo root) because `pnpm install` requires access to root `pnpm-lock.yaml`, `pnpm-workspace.yaml`, and all shared packages in `packages/`.

---

# Strategy 3: Nixpacks

## Required Code Changes

**None** — Nixpacks auto-detects Next.js. Same as Railpack, no `output: "standalone"` or Dockerfile needed.

If `output: "standalone"` is already set, **remove or comment out** before using Nixpacks.

## Coolify Configuration

### dyzulk-web

| Setting | Value |
|---|---|
| Build strategy | Nixpacks |
| Base directory | `/` |
| Install command | `pnpm install --frozen-lockfile` |
| Build command | `pnpm build:web` |
| Start command | `pnpm --filter web start` |
| Port | `3000` |
| Domain | `dyzulk.com` |

### dyzulk-dashboard

| Setting | Value |
|---|---|
| Build strategy | Nixpacks |
| Base directory | `/` |
| Install command | `pnpm install --frozen-lockfile` |
| Build command | `pnpm build:dashboard` |
| Start command | `pnpm --filter dashboard start` |
| Port | `3000` |
| Domain | `dash.dyzulk.com` |

### dyzulk-docs

| Setting | Value |
|---|---|
| Build strategy | Nixpacks |
| Base directory | `/` |
| Install command | `pnpm install --frozen-lockfile` |
| Build command | `pnpm build:docs` |
| Start command | `pnpm --filter docs start` |
| Port | `3000` |
| Domain | `docs.dyzulk.com` |

### Optional: `nixpacks.toml` (at monorepo root)

To lock Node/pnpm versions:

```toml
[phases.setup]
nixPkgs = ["nodejs_24"]

[phases.install]
cmds = ["corepack enable && corepack prepare pnpm@11 --activate && pnpm install --frozen-lockfile"]
```

`nixpacks.toml` applies to **all** apps using Nixpacks from this repo. Use custom commands in Coolify per app to differentiate build/start commands.

---

# Environment Variables

Set per Application Project in Coolify.

### All Apps (Shared)

```env
NODE_ENV=production
```

### dyzulk-dashboard (Additional)

```env
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=https://dash.dyzulk.com
```

### dyzulk-web (Additional)

```env
NEXT_PUBLIC_SITE_URL=https://dyzulk.com
```

Use Coolify's **Shared Variables** feature for variables common across all apps, then reference with `{{project.VARIABLE_NAME}}`.

---

# Quick Decision Guide

```
Need small image + fast builds?
  YES -> Dockerfile (recommended)
  NO  -> Want zero config?
           YES -> Railpack (newer, Rust-based)
           NO  -> Nixpacks (more mature, Nix-based)
```
