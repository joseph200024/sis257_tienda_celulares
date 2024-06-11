import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateProductoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(60, { message: 'El campo nombre no debe ser mayor a 250 caracteres' })
  @MinLength(2, { message: 'El campo nombre no debe ser menor a 2 caracteres' })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo descripcion no debe ser vacío' })
  @IsString({ message: 'El campo descripcion debe ser de tipo cadena' })
  @MaxLength(5000, { message: 'El campo descripcion no debe ser mayor a 5000 caracteres' })
  @MinLength(10, { message: 'El campo descripcion no debe ser menor a 10 caracteres' })
  readonly descripcion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo marca no debe ser vacío' })
  @IsString({ message: 'El campo marca debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo marca no debe ser mayor a 100 caracteres' })
  @MinLength(3, { message: 'El campo marca no debe ser menor a 3 caracteres' })
  readonly marca: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo precio no debe ser vacío' })
  @IsNumber({}, { message: 'El campo precio debe ser de tipo numérico' })
  readonly precio: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo stock no debe ser vacío' })
  @IsNumber({}, { message: 'El campo stock debe ser de tipo numérico' })
  readonly stock: number;
}
