import type { FastifyRequest, FastifyReply } from "fastify";
import { ApplicationController } from "./application-controller";
import Post from "../models/post"
import Tag from "../models/tag"
import Comment from "../models/comment"

export default class PostsController extends ApplicationController
{
  static async index (request: FastifyRequest, reply: FastifyReply){
    const controller = new PostsController();
    const postRepository = controller.getRepository(Post);
    const tagRepository = controller.getRepository(Tag);

    const posts = await postRepository.findAll({ 
      order: [['createdAt', 'DESC']],
      include: [{
        model: tagRepository,
        attributes: ["id", "name"],
        through: {attributes: []}
      }]
    })

    controller.closeConnection();
    
    return reply.status(200).send({...posts})
  }

  static async show (request: FastifyRequest, reply: FastifyReply){
    const params = request.params as { id: number }
    const controller = new PostsController();
    const postRepository = controller.getRepository(Post);
    const commnetRepository = controller.getRepository(Comment);

    const post = await postRepository.findOne(
      { 
        where: {id: params.id},
        include: [commnetRepository]
      }
    )

    controller.closeConnection();
    
    return reply.status(200).send({post})
  }
}