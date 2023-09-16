import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ActiveUserInterface } from '../common/interfaces/active-user.interface';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<import("./entities/book.entity").Book>;
    findAll(user: ActiveUserInterface): Promise<import("./entities/book.entity").Book[]>;
    findOne(id: number): Promise<import("./entities/book.entity").Book>;
    update(id: number, updateBookDto: UpdateBookDto): Promise<import("./entities/book.entity").Book>;
    remove(id: number): Promise<void>;
}
