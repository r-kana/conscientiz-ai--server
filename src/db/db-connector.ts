import { env } from '#/config/env';
import { Sequelize } from 'sequelize-typescript';
import databaseConfig from "#/config/database"

export default function dbConnection() {
  const config = {
    development: {
      dialect: databaseConfig.development.dialect as "sqlite",
      storage: databaseConfig.development.storage,
      loggin: databaseConfig.development.loggin,
      models: [databaseConfig.development.models],
      repositoryMode: true,
    },
    production: {
      dialect: databaseConfig.production.models as "sqlite",
      storage: databaseConfig.production.storage,
      loggin: databaseConfig.production.models,
      models: [databaseConfig.production.models],
      repositoryMode: true,
    }
  }
  return new Sequelize(config[env.NODE_ENV]);
}
