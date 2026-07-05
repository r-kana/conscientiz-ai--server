export interface ICreateCommentParamsSchema {
  email: string,
  name: string,
  content: string,
  postId: number
}

export const createCommentBodyJsonSchema = {
  type: 'object',
  required: ['email', 'name', 'content', 'postId'],
  properties: {
    email: { type: 'string' },
    name: { type: 'string' },
    content: { type: 'string' },
    postId: { type: 'number' },
  }
}