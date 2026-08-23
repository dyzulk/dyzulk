# ── Stage 1: Base ─────────────────────────────────────────────
FROM node:24-alpine AS base
RUN corepack enable && corepack prepare pnpm@11 --activate
WORKDIR /app

# ── Stage 2: Install dependencies ─────────────────────────────
FROM base AS deps

# Copy workspace root configs
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./

# Copy all workspace package.json files for dependency resolution
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

RUN pnpm build:web

# ── Stage 4: Production runner ────────────────────────────────
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy standalone output
COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder /app/apps/web/public ./apps/web/public

USER nextjs
EXPOSE 3000

CMD ["node", "apps/web/server.js"]
