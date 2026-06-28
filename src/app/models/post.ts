import { Table, Column, Model, HasMany, DataType, BelongsToMany } from 'sequelize-typescript';
import Post_Tag from './post_tags';
import Comment from './comment';
import Tag from './tag';

@Table
export default class Post extends Model {
  @Column
  declare title: string;

  @Column
  declare subtitle: string;

  @Column(DataType.TEXT)
  declare content: string;

  @HasMany(() => Comment)
  declare comments: Comment[];

  @BelongsToMany(() => Tag, () => Post_Tag)
    declare tags: Tag[];
}