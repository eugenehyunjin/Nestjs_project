import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  mobile: string;

  @Column
  role: string;

  @Column
  password: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}