import type { FastifyRequest, FastifyReply } from "fastify";
import type { 
  ICreateQuestionParamsSchema, 
  ISearchQuestionParamsSchema 
} from "../schemas/question-params-schema";
import Question from "../models/question";
import { ApplicationController } from "./application-controller";

export class QuestionsController extends ApplicationController
{
  static async create(request: FastifyRequest, reply: FastifyReply)
  {
    const params = request.params as ICreateQuestionParamsSchema
    const controller = new QuestionsController();
    const questionRepository = controller.getRepository(Question);
    
    await questionRepository.create({...params});
    controller.closeConnection();

    return reply.status(200).send({message: "Question created"})
  }

  static async index (request: FastifyRequest, reply: FastifyReply){
    const { search, tags } = request.query as ISearchQuestionParamsSchema;
    const controller = new QuestionsController();

    const matchString = search.trim().split(/\s+/).join(' OR ');
    const tagIdsClause = tags ? `AND qt.tagId IN ( ${tags.join(', ')} )` : "";

    const questions = await controller.conn.query(
      `
        SELECT q.*, a.content AS answer 
        FROM Questions q
        JOIN QuestionsFTS fts ON q.id = fts.rowid
        JOIN Question_Tags qt ON qt.questionId = q.id
        JOIN Answers a ON a.questionId = q.id
        WHERE fts MATCH :search 
        ${tagIdsClause}
        ORDER BY rank ASC
      `,
      {
        replacements: { search: matchString },
        model: Question,
        mapToModel: true
      }
    );
    controller.closeConnection();
    
    return reply.status(200).send({...questions})
  }
}