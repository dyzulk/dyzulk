#!/usr/bin/env bash
set -e

# Non-interactive mode for pnpm (skip TTY prompts)
export CI=true

echo "=== Fixing node_modules Permissions ==="
sudo chown -R node:node \
  /workspaces/dyzulk/node_modules \
  /workspaces/dyzulk/apps/web/node_modules \
  /workspaces/dyzulk/apps/docs/node_modules \
  /workspaces/dyzulk/packages/ui/node_modules \
  /workspaces/dyzulk/packages/eslint-config/node_modules \
  /workspaces/dyzulk/packages/typescript-config/node_modules

echo "=== Installing Dependencies ==="
pnpm install --no-frozen-lockfile

echo "=== Initializing Git Submodules ==="
git submodule update --init --recursive

echo "=== Devcontainer Post-Create Finished Successfully ==="
