import { Table, Column, Model, HasMany, DataType, BelongsToMany } from 'sequelize-typescript';
import Post_Tag from './post_tag';
import Comment from './comment';
import Tag from './tag';

@Table
export default class Post extends Model {
  @Column(DataType.STRING)
  declare title: string;

  @Column(DataType.STRING)
  declare subtitle: string;

  @Column(DataType.TEXT)
  declare content: string;

  @HasMany(() => Comment)
  declare comments: Comment[];

  @BelongsToMany(() => Tag, () => Post_Tag)
  declare tags: Tag[];
}