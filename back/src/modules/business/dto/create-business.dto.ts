import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateBusinessDto {
  @IsString()
  name: string;
  @IsNumber()
  nit: number;
  @IsEmail()
  mail: string;
}
