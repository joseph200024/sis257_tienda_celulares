import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateProveedoreDto {
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
  @MinLength(10, { message: 'El campo direccion no debe ser menor a 10 caracteres' })
  readonly direccion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo gmail no debe ser vacío' })
  @IsString({ message: 'El campo gmail debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo gmail no debe ser mayor a 50 caracteres' })
  @MinLength(3, { message: 'El campo gmail no debe ser menor a 3 caracteres' })
  readonly gmail: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo telefono no debe ser vacío' })
  @IsNumber({}, { message: 'El campo telefono debe ser de tipo numérico' })
  readonly telefono: number;
}
