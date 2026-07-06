import { env } from '../config/env/index'
import { Sequelize } from 'sequelize-typescript';
import databaseConfig from "../config/database"
import Post_Tag from '../app/models/post_tag';
import Question_Tag from '../app/models/question_tag';
import Answer from '../app/models/answer';
import Question from '../app/models/question';
import Post from '../app/models/post';
import Comment from '../app/models/comment';
import Tag from '../app/models/tag';

export default function dbConnection() {
  const config = {
    development: {
      dialect: databaseConfig.development.dialect as "sqlite",
      storage: databaseConfig.development.storage,
      loggin: databaseConfig.development.loggin,
      repositoryMode: databaseConfig.development.repositoryMode,
      models: [Answer, Question, Post, Comment, Tag, Post_Tag, Question_Tag],
    },
    production: {
      dialect: databaseConfig.production.dialect as "sqlite",
      storage: databaseConfig.production.storage,
      loggin: databaseConfig.production.loggin,
      repositoryMode: databaseConfig.production.repositoryMode,
      models: [Answer, Question, Post, Comment, Tag, Post_Tag, Question_Tag],
    }
  }

  return new Sequelize(config[env.NODE_ENV]);
}
