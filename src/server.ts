import { env } from './config/env/index'
import fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyStatic from '@fastify/static'
// import fastifyJwt from '@fastify/jwt'
import { routes } from './config/routes'
import path from 'node:path'

export const app = fastify({
  logger: true,
})

app.register(routes)
app.register(cors, {
  origin: env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Authorization'],
  maxAge: 3600,
})

app.register(fastifyStatic, {
  root: path.resolve(process.env.INIT_CWD, './src/public'),
  prefix: '/public/',
})

// fastify.addHook('onClose', async () => {});

async function startServer() {
  await app.listen({ host: '0.0.0.0', port: env.APP_PORT })

  console.log(`Server started successfully!`)
  console.log(`Port: ${env.APP_PORT}`)
  console.log(path.resolve(process.env.INIT_CWD, './src/public'))

  if (env.NODE_ENV === 'development') {
    console.log(`Localhost: http://localhost:${env.APP_PORT}`)
  }
}

startServer().catch((err) => {
  console.error(`Sistema Falhou. Erro:  ${err.message}, stack: ${err.stack}`)
  process.exit(1)
})