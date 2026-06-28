FROM node:24.16-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

FROM base AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY tsconfig.json .sequelizerc ./
COPY src ./src
RUN npm run build

FROM base AS runtime
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package.json ./
EXPOSE 3000

CMD ["node", "dist/server.js"]
