import { Table, Column, Model, DataType} from 'sequelize-typescript';

@Table({
  tableName: 'Tags',
  modelName: 'Tag',
  timestamps: true,
})
export default class Tag extends Model {
  @Column(DataType.STRING)
  declare name: string;
}