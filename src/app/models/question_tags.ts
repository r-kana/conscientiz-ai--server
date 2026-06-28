import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import Question from "./question"
import Tag from "./tag"


@Table
export default class Question_Tag extends Model {
  @ForeignKey(() => Tag)
  @Column
  declare tagId: number;

  @ForeignKey(() => Question)
  @Column
  declare questionId: number;
}