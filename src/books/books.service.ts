import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book = this.bookRepository.create(createBookDto);
    return this.bookRepository.save(book);
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async findOne(id: number): Promise<Book | undefined> {
    return await this.bookRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateBookDto: UpdateBookDto,
  ): Promise<Book | undefined> {
    await this.bookRepository.update(id, updateBookDto);
    return this.bookRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const bookDeleted = await this.bookRepository.findOneBy({ id });
    if (!bookDeleted) {
      throw new NotFoundException('Book was not found');
    }
    await this.bookRepository.delete(id);
  }

  async bookReserved(id: number): Promise<Book | undefined> {
    const book = await this.findOne(id);
    if (book.isReserved) {
      throw new ConflictException('This Book is already reserved');
    }
    book.isReserved = true;
    return this.bookRepository.save(book);
  }

  async deleteReservation(id: number): Promise<Book | undefined> {
    const book = await this.findOne(id);
    if (!book.isReserved) {
      throw new ConflictException('This Book now is not reserved');
    }
    book.isReserved = false;
    return this.bookRepository.save(book);
  }
}
