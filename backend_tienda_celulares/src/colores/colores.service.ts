import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateColoreDto } from './dto/create-colore.dto';
import { UpdateColoreDto } from './dto/update-colore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Colore } from './entities/colore.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColoresService {
  constructor(@InjectRepository(Colore) private coloresRepository: Repository<Colore>) {}

  async create(createColoreDto: CreateColoreDto): Promise<Colore> {
    const existe = await this.coloresRepository.findOneBy({
      nombre: createColoreDto.nombre.trim(),
    });

    if (existe) {
      throw new ConflictException('El color ya existe');
    }

    return this.coloresRepository.save({
      nombre: createColoreDto.nombre.trim(),
    });
  }

  async findAll(): Promise<Colore[]> {
    return this.coloresRepository.find();
  }

  async findOne(id: number): Promise<Colore> {
    const colore = await this.coloresRepository.findOneBy({ id });
    if (!colore) {
      throw new NotFoundException(`La colore ${id} no existe`);
    }
    return colore;
  }

  async update(id: number, updateColoreDto: UpdateColoreDto): Promise<Colore> {
    const colore = await this.findOne(id);
    const coloreUpdate = Object.assign(colore, updateColoreDto);
    return this.coloresRepository.save(coloreUpdate);
  }

  async remove(id: number) {
    const colore = await this.findOne(id);
    return this.coloresRepository.delete(colore.id);
  }
}
