import { Table, Column, Model, ForeignKey, DataType } from 'sequelize-typescript';
import Question from "./question"
import Tag from "./tag"

@Table({
  tableName: 'Question_Tags',
  modelName: 'Question_Tag',
  timestamps: true,
})
export default class Question_Tag extends Model {
  @ForeignKey(() => Tag)
  @Column(DataType.INTEGER)
  declare tagId: number;

  @ForeignKey(() => Question)
  @Column(DataType.INTEGER)
  declare questionId: number;
}