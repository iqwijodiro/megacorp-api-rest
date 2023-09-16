import { Book } from '../../books/entities/book.entity';
import { Role } from '../../common/enums/role.enum';
export declare class User {
    id: number;
    email: string;
    username: string;
    password: string;
    role: Role;
    isAdmin: boolean;
    createdAt: Date;
    books: Book[];
}
