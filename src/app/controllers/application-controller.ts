import type { Model, Sequelize } from "sequelize-typescript";
import dbConnection from "../../db/db-connector";

export class ApplicationController
{
  public conn!: Sequelize;

  constructor() 
  {
    this.conn = dbConnection();
  }
  
  public getRepository(model : new () => Model<any, any>)
  {
    return this.conn.getRepository(model);
  }

  public closeConnection()
  {
    this.conn.close();
  }
}