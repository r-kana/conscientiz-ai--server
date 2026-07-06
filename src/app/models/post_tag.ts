import { Table, Column, Model, ForeignKey, DataType } from 'sequelize-typescript';
import Post from "./post"
import Tag from "./tag"


@Table({
  tableName: 'Post_Tags',
  modelName: 'Post_Tag',
  timestamps: true,
})
export default class Post_Tag extends Model {
  @ForeignKey(() => Tag)
  @Column(DataType.INTEGER)
  declare tagId: number;

  @ForeignKey(() => Post)
  @Column(DataType.INTEGER)
  declare postId: number;
}