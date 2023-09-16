import { User } from '../../user/entities/user.entity';
export declare class Book {
    id: number;
    title: string;
    author: string;
    publisher: string;
    description: string;
    publishedYear: number;
    createdAt: Date;
    updatedAt: Date;
    isReserved: boolean;
    user: User;
    userEmail: string;
}
