import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import PostsController from "../app/controllers/posts-controller";
import CommentsController from "../app/controllers/comments-controller";
import { QuestionsController } from "../app/controllers/questions-controller";

export const routes = async (app: FastifyInstance) => {
  app.get('/responses', (request: FastifyRequest, reply: FastifyReply) => { reply.send({ hello: 'world' }) })

  app.get("/posts", PostsController.index)
  app.get("/posts/:id", PostsController.show)
  app.post("/posts/:id/rating", PostsController.rating)

  app.post("/comments/:id", CommentsController.create)

  app.post("/questions", QuestionsController.create)
  app.get("/questions", QuestionsController.index)
  app.get("/questions/:id", QuestionsController.show)
  app.get("/questions/search", QuestionsController.search)

}