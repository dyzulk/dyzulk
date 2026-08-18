FROM mcr.microsoft.com/devcontainers/typescript-node:4-24-bookworm

# Aktifkan corepack dan persiapkan versi pnpm spesifik
RUN corepack enable && corepack prepare pnpm@11.21.0 --activate

# Tentukan direktori store pnpm dan path
ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
