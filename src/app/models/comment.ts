import { Table, Column, Model, BelongsTo, DataType, ForeignKey } from 'sequelize-typescript';
import Post from "./post"

@Table({
  tableName: 'Comments',
  modelName: 'Comment',
  timestamps: true,
})
export default class Comment extends Model {
  @Column(DataType.STRING)
  declare email: string;

  @Column(DataType.STRING)
  declare name: string;

  @Column(DataType.TEXT)
  declare content: string;

  @BelongsTo(() => Post)
  declare post: Post;

  @ForeignKey(() => Post)
  @Column(DataType.INTEGER)
  declare postId: number;
}