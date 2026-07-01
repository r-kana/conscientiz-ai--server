import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import PostsController from "../app/controllers/posts-controller";
import CommentsController from "../app/controllers/comments-controller";
import { QuestionsController } from "../app/controllers/questions-controller";

export const routes = async (app: FastifyInstance) => {
  app.get('/responses', (request: FastifyRequest, reply: FastifyReply) => { reply.send({ hello: 'world' })})

  app.get("/posts", await PostsController.index)
  app.get("/posts/:id", await PostsController.show)

  app.post("/comments", await CommentsController.create)
  app.get("/posts/:id/comments", await CommentsController.index)

  app.post("/questions", await QuestionsController.create)
  app.get("/questions", await QuestionsController.index)

}