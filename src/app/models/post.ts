import { Table, Column, Model, HasMany, DataType, BelongsToMany } from 'sequelize-typescript';
import Post_Tag from './post_tag';
import Comment from './comment';
import Tag from './tag';

@Table({
  tableName: 'Posts',
  modelName: 'Post',
  timestamps: true,
})
export default class Post extends Model {
  @Column(DataType.STRING)
  declare title: string;

  @Column(DataType.STRING)
  declare subtitle: string;

  @Column(DataType.TEXT)
  declare content: string;

  @Column(DataType.FLOAT)
  declare ratingMean: number;

  @Column(DataType.INTEGER)
  declare ratingCount: number;

  @Column(DataType.STRING)
  declare imgSrc: string;

  @HasMany(() => Comment)
  declare comments: Comment[];

  @BelongsToMany(() => Tag, () => Post_Tag)
  declare tags: Tag[];
}