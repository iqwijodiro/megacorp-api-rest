import {
  IsNotEmpty,
  IsEmail,
  IsString,
  MinLength,
} from 'class-validator';

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

}
