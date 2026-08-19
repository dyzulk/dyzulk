# Base image
FROM node:22-alpine AS base

# Install pnpm globally without Corepack to bypass Corepack sandbox bugs
RUN npm install -g pnpm@11.21.0

WORKDIR /app

# Copy lockfile and workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy packages package.json configurations
COPY packages/ui/package.json ./packages/ui/
COPY packages/eslint-config/package.json ./packages/eslint-config/
COPY packages/typescript-config/package.json ./packages/typescript-config/

# Copy apps package.json configurations
COPY apps/web/package.json ./apps/web/
COPY apps/docs/package.json ./apps/docs/

# Install dependencies (utilizing Docker layer cache for node_modules)
FROM base AS installer
RUN pnpm install --frozen-lockfile

# Copy all source files
COPY . .

# --- STAGE: Build & Run Web App (apps/web) ---
FROM installer AS web-builder
RUN pnpm --filter web build

FROM node:22-alpine AS web
RUN npm install -g pnpm@11.21.0
WORKDIR /app
COPY --from=web-builder /app ./
ENV PORT=3000
ENV NODE_ENV=production
EXPOSE 3000
CMD ["pnpm", "--filter", "web", "start"]

# --- STAGE: Build & Run Docs App (apps/docs) ---
FROM installer AS docs-builder
RUN pnpm --filter docs build

FROM node:22-alpine AS docs
RUN npm install -g pnpm@11.21.0
WORKDIR /app
COPY --from=docs-builder /app ./
ENV PORT=3001
ENV NODE_ENV=production
EXPOSE 3001
CMD ["pnpm", "--filter", "docs", "start"]
