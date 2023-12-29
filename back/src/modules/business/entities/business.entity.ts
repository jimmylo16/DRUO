import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'business' })
export class Business {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('text')
  name: string;
  @Column('integer')
  nit: number;
  @Column('text')
  mail: string;
  @Column('bool', { default: true })
  isActive?: boolean;
}
