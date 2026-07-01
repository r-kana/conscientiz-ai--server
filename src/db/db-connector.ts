import { env } from '../config/env';
import { Sequelize } from 'sequelize-typescript';
import databaseConfig from "../config/database"

export default function dbConnection() {
  const config = {
    development: {
      dialect: databaseConfig.development.dialect as "sqlite",
      storage: databaseConfig.development.storage,
      loggin: databaseConfig.development.loggin,
      repositoryMode: databaseConfig.development.repositoryMode,
      models: [databaseConfig.development.models],
    },
    production: {
      dialect: databaseConfig.production.models as "sqlite",
      storage: databaseConfig.production.storage,
      loggin: databaseConfig.production.models,
      repositoryMode: databaseConfig.development.repositoryMode,
      models: [databaseConfig.production.models],
    }
  }

  return new Sequelize(config[env.NODE_ENV]);
}
