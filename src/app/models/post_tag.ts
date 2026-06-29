import { Table, Column, Model, ForeignKey, DataType } from 'sequelize-typescript';
import Post from "./post"
import Tag from "./tag"


@Table
export default class Post_Tag extends Model {
  @ForeignKey(() => Tag)
  @Column(DataType.INTEGER)
  declare tagId: number;

  @ForeignKey(() => Post)
  @Column(DataType.INTEGER)
  declare postId: number;
}