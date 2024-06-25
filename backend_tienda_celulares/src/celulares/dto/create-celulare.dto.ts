import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCelulareDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
  @MinLength(3, { message: 'El campo nombre no debe ser menor a 3 caracteres' })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo direccion no debe ser vacío' })
  @IsString({ message: 'El campo direccion debe ser de tipo cadena' })
  @MaxLength(200, { message: 'El campo direccion no debe ser mayor a 200 caracteres' })
  @MinLength(5, { message: 'El campo direccion no debe ser menor a 5 caracteres' })
  readonly descripcion: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo direccion no debe ser vacío' })
  @IsString({ message: 'El campo direccion debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo direccion no debe ser mayor a 100 caracteres' })
  @MinLength(2, { message: 'El campo direccion no debe ser menor a 2 caracteres' })
  readonly marca: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo direccion no debe ser vacío' })
  @IsString({ message: 'El campo direccion debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo direccion no debe ser mayor a 100 caracteres' })
  @MinLength(2, { message: 'El campo direccion no debe ser menor a 2 caracteres' })
  readonly modelo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo telefono no debe ser vacío' })
  @IsNumber({}, { message: 'El campo telefono debe ser de tipo numérico' })
  readonly precio: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo telefono no debe ser vacío' })
  @IsNumber({}, { message: 'El campo telefono debe ser de tipo numérico' })
  readonly stock: number;

  @IsNotEmpty()
  @IsNumber()
  readonly categoria: number;

  @IsNotEmpty()
  @IsNumber()
  readonly colore: number;
}
