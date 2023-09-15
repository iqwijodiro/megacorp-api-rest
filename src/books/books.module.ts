import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { UserModule } from '../user/user.module';
// import { UserService } from '../user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book]), UserModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
