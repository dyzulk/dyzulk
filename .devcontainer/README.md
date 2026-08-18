# Dev Container

Containerized development environment for the **Dyzulk** monorepo. Provides a consistent, reproducible setup with Node.js, pnpm, and Turborepo — ready to build and serve all apps in production mode.

## Stack

| Component | Version |
|-----------|---------|
| **Base Image** | `mcr.microsoft.com/devcontainers/typescript-node:4-24-bookworm` |
| **Node.js** | 24.x |
| **pnpm** | 11.21.0 (via Corepack) |
| **Turborepo** | Workspace-level orchestration |

## Port Mapping

| App | Container Port | Host Port |
|-----|:-:|:-:|
| Web (Next.js) | `3000` | `30000` |
| Docs (Fumadocs) | `3001` | `30001` |

## Quick Start

### Using Docker Compose (Recommended)

```bash
# Build & start in detached mode
docker compose -f .devcontainer/docker-compose.yml up -d --build

# View logs
docker compose -f .devcontainer/docker-compose.yml logs -f

# Stop
docker compose -f .devcontainer/docker-compose.yml down
```

### Using VS Code Dev Containers

1. Install the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.
2. Open the Command Palette → **Dev Containers: Reopen in Container**.
3. VS Code will automatically build the image, install dependencies, and start the production server.

## What Happens on Start

The container lifecycle executes the following steps in order:

1. **`postCreateCommand`** — Runs `.devcontainer/post-create.sh`:
   - Installs all workspace dependencies via `pnpm install`
   - Initializes git submodules (`git submodule update --init --recursive`)

2. **`postStartCommand`** — Builds and serves the apps:
   - `pnpm build` — Production build of all workspaces via Turborepo
   - `pnpm start` — Starts Next.js production servers concurrently

## Volumes

| Volume | Mount Path | Purpose |
|--------|-----------|---------|
| `dyzulk-pnpm-store` | `/home/node/.local/share/pnpm/store` | Persistent pnpm package cache across container rebuilds |

## VS Code Extensions (Auto-installed)

- **ESLint** — `dbaeumer.vscode-eslint`
- **Prettier** — `esbenp.prettier-vscode`
- **Tailwind CSS IntelliSense** — `bradlc.vscode-tailwindcss`
- **Turborepo** — `vercel.turbo-vscode`
- **MDX** — `unifiedjs.vscode-mdx`
- **GitLens** — `eamodio.gitlens`
- **Git Graph** — `mhutchie.git-graph`
- **Material Icon Theme** — `pkief.material-icon-theme`

## File Structure

```
.devcontainer/
├── devcontainer.json      # Dev Container specification (Compose mode)
├── docker-compose.yml     # Docker Compose service definition
├── Dockerfile             # Custom image (Node 24 + pnpm 11.21.0)
├── post-create.sh         # Post-create setup script
└── README.md              # This file
```
