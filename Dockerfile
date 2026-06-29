FROM node:24.16-alpine AS base
RUN corepack enable && corepack prepare pnpm@10.33.3 --activate

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile --prod

FROM base AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile
COPY tsconfig.json .sequelizerc tsdown.config.ts ./
COPY src ./src
RUN pnpm build

FROM base AS runtime
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package.json ./
EXPOSE 3000

CMD ["node", "dist/server.mjs"]