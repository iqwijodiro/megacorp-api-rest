import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  OneToMany,
} from 'typeorm';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

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

  @OneToMany(() => User, (user) => user.id,{
    eager: true
  })
  user: User;

  // book age
  bookAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.publishedYear;
  }
}
