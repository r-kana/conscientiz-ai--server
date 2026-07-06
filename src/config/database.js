export default {
  development: {
    dialect: "sqlite",
    storage: process.env.INIT_CWD + "/src/db/storage/development.sqlite",
    loggin: false,
    models: process.env.INIT_CWD + "/src/app/models",
    repositoryMode: true,
  },
  production: {
    dialect: "sqlite",
    storage: process.env.INIT_CWD + "/src/db/storage/production.sqlite",
    loggin: false,
    models: process.env.INIT_CWD + "/src/app/models",
    repositoryMode: true,
  }
}
