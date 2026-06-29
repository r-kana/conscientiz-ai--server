import { Table, Column, Model, BelongsTo, DataType, ForeignKey } from 'sequelize-typescript';
import Question from "./question"

@Table
export default class Answer extends Model {
  @Column(DataType.TEXT)
  declare content: string;

  @BelongsTo(() => Question)
  declare question: Question;

  @ForeignKey(() => Question)
  @Column(DataType.INTEGER)
  declare questionId: number;
}