import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { UpdateProveedoreDto } from './dto/update-proveedore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proveedore } from './entities/proveedore.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedoresService {
  constructor(
    @InjectRepository(Proveedore) private proveedoresRepository: Repository<Proveedore>,
  ) {}

  async create(createProveedoreDto: CreateProveedoreDto): Promise<Proveedore> {
    const existe = await this.proveedoresRepository.findOneBy({
      nombre: createProveedoreDto.nombre.trim(),
    });

    if (existe) {
      throw new ConflictException('La proveedore ya existe');
    }

    return this.proveedoresRepository.save({
      nombre: createProveedoreDto.nombre.trim(),
      gmail: createProveedoreDto.gmail.trim(),
      direccion: createProveedoreDto.direccion.trim(),
      telefono: createProveedoreDto.telefono,
    });
  }

  async findAll(): Promise<Proveedore[]> {
    return this.proveedoresRepository.find();
  }

  async findOne(id: number): Promise<Proveedore> {
    const proveedore = await this.proveedoresRepository.findOneBy({ id });
    if (!proveedore) {
      throw new NotFoundException(`El proveedor ${id} no existe`);
    }
    return proveedore;
  }

  async update(id: number, updateProveedoreDto: UpdateProveedoreDto): Promise<Proveedore> {
    const proveedore = await this.findOne(id);
    const proveedoreUpdate = Object.assign(proveedore, updateProveedoreDto);
    return this.proveedoresRepository.save(proveedoreUpdate);
  }

  async remove(id: number) {
    const proveedore = await this.findOne(id);
    return this.proveedoresRepository.delete(proveedore.id);
  }
}
