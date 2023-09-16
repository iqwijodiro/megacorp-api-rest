import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany
} from 'typeorm';
import { IsNotEmpty, IsEmail, IsBoolean } from 'class-validator';
import { Book } from '../../books/entities/book.entity';
import { Role } from '../../common/enums/role.enum';

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

  @Column({ nullable: false, select: false })
  @IsNotEmpty()
  password: string;

  @Column({ type: 'enum', enum: Role,  default: Role.USER })
  role: Role;

  @Column({ default: false })
  @IsBoolean()
  isAdmin: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany( () => Book, (book) => book.user)
  books: Book[]
}
