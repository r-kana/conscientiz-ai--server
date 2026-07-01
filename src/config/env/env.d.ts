declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Environment
      NODE_ENV: 'development' | 'production',
      // Database
      DATABASE_PATH: string,
      // App
      APP_NAME: string,
      APP_PORT: number,
      JWT_SECRET: string,
      FRONTEND_URL: string,
      INIT_CWD: string
    }
  }
}

export {};