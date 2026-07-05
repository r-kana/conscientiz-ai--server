import type { FastifyRequest, FastifyReply } from "fastify";
import type { 
  ICreateQuestionParamsSchema, 
  ISearchQuestionParamsSchema 
} from "../schemas/question-params-schema";
import Question from "../models/question";
import { ApplicationController } from "./application-controller";
import Answer from "../models/answer";

export class QuestionsController extends ApplicationController
{
  static async show(request: FastifyRequest, reply: FastifyReply)
  {
    const {id} = request.params as {id: number}
    const controller = new QuestionsController();
    const questionRepository = controller.getRepository(Question);
    const answerRepository = controller.getRepository(Answer);
    
    const question = await questionRepository.findOne(
      {
        where: { id: id },
        include: [
          {
            model: answerRepository,
            attributes: ["id", "content", "updatedAt"]
          }
        ],
      }
    );
    controller.closeConnection();

    return reply.status(200).send({ question })
  }

  static async create(request: FastifyRequest, reply: FastifyReply)
  {
    const params = request.body as ICreateQuestionParamsSchema
    const controller = new QuestionsController();
    const questionRepository = controller.getRepository(Question);
    
    await questionRepository.create({...params});
    controller.closeConnection();

    return reply.status(200).send({message: "Question created"})
  }

  static async search (request: FastifyRequest, reply: FastifyReply){
    const { search, tags, limit} = request.query as ISearchQuestionParamsSchema;
    const controller = new QuestionsController();
    const questionRepository = controller.getRepository(Question);

    const searchTerm = search.trim().replace("?", "")
    const matchString = `"${searchTerm}" OR ${searchTerm.split(/\s+/).join(' OR ')}`;
    const tagIdsClause = tags ? `AND qt.tagId IN ( ${tags.join(', ')} )` : "";
    const limitClause = limit ? `LIMIT ${limit}` : "";

    const questions = await controller.conn.query(
      `
        SELECT q.*, a.content AS answer 
        FROM QuestionFTS AS fts
        JOIN Questions AS q ON q.id = fts.rowid
        LEFT JOIN Answers AS a ON a.questionId = q.id
        LEFT JOIN Question_Tags AS qt ON qt.questionId = q.id
        WHERE QuestionFTS MATCH '${matchString}'
        ${tagIdsClause}
        ORDER BY fts.rank
        ${limitClause}
      `,
      {
        replacements: { 
          search: matchString,
        },
        model: questionRepository,
        mapToModel: true
      }
    );

    controller.closeConnection();
    
    return reply.status(200).send({...questions})
  }

  static async index (request: FastifyRequest, reply: FastifyReply){
    const { limit} = request.query as ISearchQuestionParamsSchema;
    const controller = new QuestionsController();
    const questionRepository = controller.getRepository(Question);
    const answerRepository = controller.getRepository(Answer);

    const questions = await questionRepository.findAll({
      order: [['createdAt', 'DESC']],
      include: [{
        model: answerRepository,
        attributes: ["id", "content"],
      }],
      limit: limit
    })
    
    controller.closeConnection();
    
    return reply.status(200).send({...questions})
  }
}