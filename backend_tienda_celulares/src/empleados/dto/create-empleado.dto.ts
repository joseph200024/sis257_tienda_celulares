import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateEmpleadoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo cargo no debe ser vacío' })
  @IsString({ message: 'El campo cargo debe ser de tipo cadena' })
  @MaxLength(60, { message: 'El campo cargo no debe ser mayor a 250 caracteres' })
  @MinLength(2, { message: 'El campo cargo no debe ser menor a 2 caracteres' })
  readonly cargo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo salario no debe ser vacío' })
  @IsNumber({}, { message: 'El campo salario debe ser de tipo numérico' })
  readonly salario: number;

  @ApiProperty({ example: '2024-04-13' })
  @IsNotEmpty({ message: 'El campo fecha Contratacion no debe ser vacío' })
  @IsDateString({}, { message: 'El campo fecha Contratacion debe ser de tipo fecha' })
  readonly fechaContratacion: Date;
}
