import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'business' })
export class Business {
  @PrimaryGeneratedColumn()
  id: string;
  @Column('varchar', { unique: true })
  name: string;
  @Column('integer', { nullable: true })
  nit: number;
  @Column('text', { nullable: true })
  mail: string;
  @Column('bool', { default: true })
  isActive?: boolean;
}
