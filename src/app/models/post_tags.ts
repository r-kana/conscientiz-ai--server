import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import Post from "./post"
import Tag from "./tag"


@Table
export default class Post_Tag extends Model {
  @ForeignKey(() => Tag)
  @Column
  declare tagId: number;

  @ForeignKey(() => Post)
  @Column
  declare postId: number;
}