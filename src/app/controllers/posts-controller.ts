import type { FastifyRequest, FastifyReply } from "fastify";
import { ApplicationController } from "./application-controller";
import Post from "../models/post"
import Tag from "../models/tag"
import Comment from "../models/comment"
import type {
  ISearchPostParamsSchema,
} from "../schemas/post-params-schema";

export default class PostsController extends ApplicationController {
  static async index(request: FastifyRequest, reply: FastifyReply) {
    const { limit } = request.query as ISearchPostParamsSchema;
    const controller = new PostsController();
    const postRepository = controller.getRepository(Post);
    const tagRepository = controller.getRepository(Tag);

    const posts = await postRepository.findAll({
      order: [['createdAt', 'DESC']],
      include: [{
        model: tagRepository,
        attributes: ["id", "name"],
        through: { attributes: [] }
      }],
      limit: limit
    })

    controller.closeConnection();

    return reply.status(200).send({ ...posts })
  }

  static async show(request: FastifyRequest, reply: FastifyReply) {
    const params = request.params as { id: number }
    const controller = new PostsController();
    const postRepository = controller.getRepository(Post);
    const commnetRepository = controller.getRepository(Comment);
    const tagRepository = controller.getRepository(Tag);

    const post = await postRepository.findOne(
      {
        where: { id: params.id },
        include: [
          {
            model: tagRepository,
            attributes: ["id", "name"],
            through: { attributes: [] }
          },
          commnetRepository
        ],
      }
    )

    controller.closeConnection();

    return reply.status(200).send({ post })
  }

  static async rating(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: number }
    const { rating } = request.body as { rating: number }
    const controller = new PostsController();
    const postRepository = controller.getRepository(Post);

    const post = await postRepository.findOne({ where: { id: id } }) as Post
    if (post === null) return reply.status(400).send({ message: "bad request" })

    const ratingMean = post.ratingMean === 0
      ? rating
      : ((post.ratingMean * post.ratingCount) + rating) / (post.ratingCount + 1)

    await postRepository.update(
      {
        ratingMean: ratingMean,
        ratingCount: post.ratingCount + 1
      },
      { where: { id: id } }
    )

    controller.closeConnection();

    return reply.status(200).send({ message: "rating updated" })
  }
}