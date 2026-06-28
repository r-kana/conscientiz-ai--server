import { Table, Column, Model} from 'sequelize-typescript';

@Table
export default class Tag extends Model {
  @Column
  declare name: string;
}