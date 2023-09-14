import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @IsNotEmpty()
  //   @ApiProperty({ description: 'Titulo del libro' })
  @IsString()
  @IsOptional()
  title?: string;

  @IsNotEmpty()
  //   @ApiProperty({ description: 'Nombre del autor' })
  @IsString()
  author?: string;

  @IsNotEmpty()
  //   @ApiProperty({ description: 'Editorial del libro' })
  @IsString()
  publisher?: string;

  @IsOptional()
  //   @ApiProperty({ description: 'Descripción del libro' })
  @IsString()
  description?: string;

  @IsOptional()
  //   @ApiProperty({ description: 'Fecha de publicación del libro' })
  @IsInt()
  publishedYear?: number;
}
