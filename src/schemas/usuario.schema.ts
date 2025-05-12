import { IsString, IsInt, Min, MaxLength, IsEmail } from 'class-validator';

export class UsuarioSchema {
  @IsString()
  @MaxLength(120)
  nome: string;

  @IsInt()
  @Min(1)
  idade: number;

  @IsString()
  @IsEmail()
  @MaxLength(255)
  email: string;
}
