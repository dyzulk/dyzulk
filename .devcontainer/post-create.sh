#!/usr/bin/env bash
set -e

# Non-interactive mode for pnpm (skip TTY prompts)
export CI=true

echo "=== Installing Dependencies ==="
pnpm install --no-frozen-lockfile

echo "=== Initializing Git Submodules ==="
git submodule update --init --recursive

echo "=== Devcontainer Post-Create Finished Successfully ==="
