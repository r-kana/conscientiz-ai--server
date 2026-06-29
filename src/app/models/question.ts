import { Table, Column, Model, HasOne, BelongsToMany, DataType } from 'sequelize-typescript';
import Answer from "./answer"
import Question_Tag from "./question_tag"
import Tag from './tag';

@Table
export default class Question extends Model {
  @Column(DataType.STRING)
  declare email: string;

  @Column(DataType.TEXT)
  declare content: string;

  @HasOne(() => Answer)
  declare answer: Answer;

  @BelongsToMany(() => Tag, () => Question_Tag)
  declare tags: Tag[];
}