import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Venta } from './entities/venta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VentasService {
  constructor(@InjectRepository(Venta) private ventasRepository: Repository<Venta>) {}

  async create(createVentaDto: CreateVentaDto): Promise<Venta> {
    const existe = await this.ventasRepository.findOneBy({
      metododePago: createVentaDto.metododePago.trim(),
    });

    if (existe) {
      throw new ConflictException('La venta ya existe');
    }

    return this.ventasRepository.save({
      metododePago: createVentaDto.metododePago.trim(),
      montoTotal: createVentaDto.montoTotal,
      fechaVenta: createVentaDto.fechaVenta,
    });
  }

  async findAll(): Promise<Venta[]> {
    return this.ventasRepository.find();
  }

  async findOne(id: number): Promise<Venta> {
    const venta = await this.ventasRepository.findOneBy({ id });
    if (!venta) {
      throw new NotFoundException(`La venta ${id} no existe`);
    }
    return venta;
  }

  async update(id: number, updateVentaDto: UpdateVentaDto): Promise<Venta> {
    const venta = await this.findOne(id);
    const ventaUpdate = Object.assign(venta, updateVentaDto);
    return this.ventasRepository.save(ventaUpdate);
  }

  async remove(id: number) {
    const venta = await this.findOne(id);
    return this.ventasRepository.delete(venta.id);
  }
}
