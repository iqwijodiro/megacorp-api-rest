import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { User } from '../../user/entities/user.entity';

@Entity()
@Index(['title', 'author']) // Ejemplo de índice compuesto
export class Book {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  author: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  publisher: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'int', nullable: true })
  @IsInt()
  publishedYear: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: false })
  isReserved: boolean;

  @JoinColumn(
      {
       name: 'userEmail', 
       referencedColumnName: 'email' 
      }
  )
  @ManyToOne(() => User)
  user: User;

  @Column()
  userEmail: string
}
