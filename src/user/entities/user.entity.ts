import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany
} from 'typeorm';
import { IsNotEmpty, IsEmail, IsBoolean } from 'class-validator';
import { Book } from 'src/books/entities/book.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({ unique: true, default: 'generic-user' })
  @IsNotEmpty()
  username: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column({ default: 'user'})
  role: string;

  @Column({ default: false })
  @IsBoolean()
  isAdmin: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany( () => Book, (book) => book.user)
  books: Book[]
}
