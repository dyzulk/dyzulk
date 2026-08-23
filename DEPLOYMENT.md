# Dyzulk Monorepo — Coolify Deployment Guide

Deployment guide for the Dyzulk monorepo to Coolify with three available build strategies.

---

## Strategy Comparison

| Aspect | Dockerfile (Recommended) | Railpack | Nixpacks |
|---|---|---|---|
| Subsequent build speed | Fastest (Docker layer cache) | Moderate | Moderate |
| Image size | Moderate (Standard monorepo bundle) | ~1GB+ (full monorepo) | ~800MB+ |
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

## Deployment Options

You have two options for deployment using Docker:
1. **Per-app Dockerfile (Standard)**: Target the specific Dockerfile inside the app's directory.
2. **Centralized Workspace Dockerfile**: Use the root `Dockerfile.workspace` and target a specific build stage.

### Setup Option A: Per-app Dockerfile
Each application runs with its own container utilizing the monorepo workspace code:
- Web App: `apps/web/Dockerfile`
- Dashboard: `apps/dashboard/Dockerfile`
- Docs: `apps/docs/Dockerfile`

Configure Coolify with:
- **Build strategy**: `Dockerfile`
- **Dockerfile location**: `apps/<app>/Dockerfile`
- **Base directory**: `/`
- **Port**: `3000`

### Setup Option B: Centralized Workspace Dockerfile
Target the single workspace Dockerfile in the root and specify the build target stage:
- **Build strategy**: `Dockerfile`
- **Dockerfile location**: `Dockerfile.workspace`
- **Base directory**: `/`
- **Port**: `3000`
- **Build target / stage**: `web`, `dashboard`, or `docs` respectively.

---

# Strategy 2: Railpack

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
| Start command | `pnpm start:web` |
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
| Start command | `pnpm start:dashboard` |
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
| Start command | `pnpm start:docs` |
| Port | `3000` |
| Domain | `docs.dyzulk.com` |

Base directory must be `/` (monorepo root) because `pnpm install` requires access to root `pnpm-lock.yaml`, `pnpm-workspace.yaml`, and all shared packages in `packages/`.

---

# Strategy 3: Nixpacks

## Coolify Configuration

### dyzulk-web

| Setting | Value |
|---|---|
| Build strategy | Nixpacks |
| Base directory | `/` |
| Install command | `pnpm install --frozen-lockfile` |
| Build command | `pnpm build:web` |
| Start command | `pnpm start:web` |
| Port | `3000` |
| Domain | `dyzulk.com` |

### dyzulk-dashboard

| Setting | Value |
|---|---|
| Build strategy | Nixpacks |
| Base directory | `/` |
| Install command | `pnpm install --frozen-lockfile` |
| Build command | `pnpm build:dashboard` |
| Start command | `pnpm start:dashboard` |
| Port | `3000` |
| Domain | `dash.dyzulk.com` |

### dyzulk-docs

| Setting | Value |
|---|---|
| Build strategy | Nixpacks |
| Base directory | `/` |
| Install command | `pnpm install --frozen-lockfile` |
| Build command | `pnpm build:docs` |
| Start command | `pnpm start:docs` |
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
