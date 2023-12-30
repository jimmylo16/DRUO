import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateBusinessDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @Min(1)
  @Max(999999999)
  @IsNumber()
  nit: number;
  @IsEmail()
  mail: string;
}
