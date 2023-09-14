import {
  IsNotEmpty,
  IsEmail,
  IsBoolean,
  IsString,
  MinLength,
  IsOptional,
} from 'class-validator';
import { Column } from 'typeorm';

export class CreateUserDto {
  @IsNotEmpty()
  //   @ApiProperty({ description: 'Email del usuario' })
  @IsEmail()
  email: string;

  @IsNotEmpty()
  //   @ApiProperty({ description: 'Nombre de usuario' })
  username: string;

  @IsNotEmpty()
  //   @ApiProperty({ description: 'Contraseña del usuario' })
  @IsString()
  @MinLength(8)
  password: string;

  @IsBoolean()
  @IsOptional()
  @Column({ default: false })
  //   @ApiProperty({ description: 'Lector y/o Administrador' })
  isAdmin: boolean;
}
