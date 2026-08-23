# Meta: Dockerfile for the dashboard application in a non-standalone monorepo environment.
# Using Node 24 LTS and pnpm 11.

# ── Stage 1: Base ─────────────────────────────────────────────
FROM node:24-alpine AS base
RUN npm install -g pnpm@9.15.9 && pnpm config set manage-node-version false
WORKDIR /app

# ── Stage 2: Install dependencies ─────────────────────────────
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/web/package.json ./apps/web/
COPY apps/dashboard/package.json ./apps/dashboard/
COPY apps/docs/package.json ./apps/docs/
COPY packages/ui/package.json ./packages/ui/
COPY packages/server/package.json ./packages/server/
COPY packages/eslint-config/package.json ./packages/eslint-config/
COPY packages/typescript-config/package.json ./packages/typescript-config/
RUN pnpm install --frozen-lockfile

# ── Stage 3: Build ────────────────────────────────────────────
FROM base AS builder
COPY --from=deps /app ./
COPY . .
RUN pnpm build:dashboard

# ── Stage 4: Production runner ────────────────────────────────
FROM node:24-alpine AS runner
RUN npm install -g pnpm@9.15.9
WORKDIR /app
COPY --from=builder /app ./

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["pnpm", "start:dashboard"]
