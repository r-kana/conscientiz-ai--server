import { ApplicationController } from "./application-controller";
import type { FastifyRequest, FastifyReply } from "fastify";
import type { ICreateCommentParamsSchema } from "../schemas/comment-params-schema";
import Comment from "../models/comment";

export default class CommentsController extends ApplicationController {
  static async create(request: FastifyRequest, reply: FastifyReply) {
    const params = request.body as ICreateCommentParamsSchema
    const controller = new CommentsController();
    const commentRepository = controller.getRepository(Comment);

    await commentRepository.create({... params});
    controller.closeConnection();

    return reply.status(200).send({ message: "Comment created" })
  }

  static async index(request: FastifyRequest, reply: FastifyReply) {
    const params = request.params as { id: number }
    const controller = new CommentsController();
    const commentRepository = controller.getRepository(Comment);
    const comments = await commentRepository.findAll({ where: { id: params.id }, order: [['createdAt', 'DESC']] })
    controller.closeConnection();

    return reply.status(200).send({ ...comments })
  }
}