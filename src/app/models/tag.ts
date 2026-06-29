import { Table, Column, Model, DataType} from 'sequelize-typescript';

@Table
export default class Tag extends Model {
  @Column(DataType.STRING)
  declare name: string;
}