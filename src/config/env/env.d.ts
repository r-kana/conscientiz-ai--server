declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production',
      APP_NAME: string,
      APP_URL: string,
      APP_PORT: number,
      JWT_SECRET: string,
      FRONTEND_URL: string,
      INIT_CWD: string
    }
  }
}

export {};