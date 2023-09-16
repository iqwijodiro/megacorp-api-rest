import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
export declare class BooksService {
    private readonly bookRepository;
    constructor(bookRepository: Repository<Book>);
    create(createBookDto: CreateBookDto): Promise<Book>;
    findAll(): Promise<Book[]>;
    findOne(id: number): Promise<Book | undefined>;
    update(id: number, updateBookDto: UpdateBookDto): Promise<Book | undefined>;
    remove(id: number): Promise<void>;
    bookReserved(id: number): Promise<Book | undefined>;
    deleteReservation(id: number): Promise<Book | undefined>;
}
