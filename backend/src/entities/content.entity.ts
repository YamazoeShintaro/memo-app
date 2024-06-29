import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column('varchar', { length: 100, nullable: true })
  title?: string;

  @Column('varchar', { length: 2000, nullable: true })
  body?: string;

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;
}
