import path from 'node:path'
const storagePath = path.dirname(import.meta.dirname) + "/db/storage/"
export default {
  development: {
    dialect: "sqlite",
    storage: storagePath + "development.sqlite",
    loggin: false,
    repositoryMode: true,
  },
  production: {
    dialect: "sqlite",
    storage: storagePath + "production.sqlite",
    loggin: false,
    repositoryMode: true,
  }
}
