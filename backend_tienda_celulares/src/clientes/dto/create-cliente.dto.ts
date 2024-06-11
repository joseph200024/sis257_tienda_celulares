import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateClienteDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombres no debe ser vacío' })
  @IsString({ message: 'El campo nombres debe ser de tipo cadena' })
  @MaxLength(40, { message: 'El campo nombres no debe ser mayor a 250 caracteres' })
  @MinLength(2, { message: 'El campo nombres no debe ser menor a 2 caracteres' })
  readonly nombres: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo apellidos no debe ser vacío' })
  @IsString({ message: 'El campo apellidos debe ser de tipo cadena' })
  @MaxLength(60, { message: 'El campo apellidos no debe ser mayor a 5000 caracteres' })
  @MinLength(4, { message: 'El campo apellidos no debe ser menor a 10 caracteres' })
  readonly apellidos: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo telefono no debe ser vacío' })
  @IsNumber({}, { message: 'El campo telefono debe ser de tipo numérico' })
  readonly telefono: number;
}
