import { env } from './config/env/index'
import fastify from 'fastify'
import cors from '@fastify/cors'
// import fastifyJwt from '@fastify/jwt'
import { routes } from './config/routes'

export const app = fastify({
  logger: true,
})
// app.register(dbConnector)
app.register(routes)
app.register(cors, {
  origin: env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Authorization'],
  maxAge: 3600,
})

// fastify.addHook('onClose', async () => {});

async function startServer() {
  await app.listen({ host: '0.0.0.0', port: env.APP_PORT })
}

startServer().catch((err) => {
  process.exit(1)
})