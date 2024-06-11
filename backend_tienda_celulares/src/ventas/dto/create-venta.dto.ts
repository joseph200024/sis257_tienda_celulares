import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateVentaDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo Metodo de Pago no debe ser vacío' })
  @IsString({ message: 'El campo Metodo de Pago debe ser de tipo cadena' })
  @MaxLength(60, { message: 'El campo Metodo de Pago no debe ser mayor a 250 caracteres' })
  @MinLength(2, { message: 'El campo Metodo de Pago no debe ser menor a 2 caracteres' })
  readonly metododePago: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo Monto Total no debe ser vacío' })
  @IsNumber({}, { message: 'El campo Monto Total debe ser de tipo numérico' })
  readonly montoTotal: number;

  @ApiProperty({ example: '2024-04-13' })
  @IsNotEmpty({ message: 'El campo fecha de Venta no debe ser vacío' })
  @IsDateString({}, { message: 'El campo fecha de Venta debe ser de tipo fecha' })
  readonly fechaVenta: Date;
}
