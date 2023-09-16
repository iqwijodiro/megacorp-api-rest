import { CreateBookDto } from './create-book.dto';
declare const UpdateBookDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBookDto>>;
export declare class UpdateBookDto extends UpdateBookDto_base {
    title?: string;
    author?: string;
    publisher?: string;
    description?: string;
    publishedYear?: number;
}
export {};
