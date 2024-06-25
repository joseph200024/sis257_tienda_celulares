import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCelulareDto } from './dto/create-celulare.dto';
import { UpdateCelulareDto } from './dto/update-celulare.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Celulare } from './entities/celulare.entity';
import { Repository } from 'typeorm';
import { Categoria } from 'src/categorias/entities/categoria.entity';
import { Colore } from 'src/colores/entities/colore.entity';

@Injectable()
export class CelularesService {
  constructor(
    @InjectRepository(Celulare) private celularesRepository: Repository<Celulare>,
    @InjectRepository(Colore) private coloreRepository: Repository<Colore>,
    @InjectRepository(Categoria) private categoriaRepository: Repository<Categoria>,
  ) {}

  async create(createCelulareDto: CreateCelulareDto): Promise<Celulare> {
    const existe = await this.celularesRepository.findOneBy({
      nombre: createCelulareDto.nombre.trim(),
    });

    if (existe) {
      throw new ConflictException('El celular ya existe');
    }

    const colore = await this.coloreRepository.findOneBy({
      id: createCelulareDto.colore,
    });
    const categoria = await this.categoriaRepository.findOneBy({
      id: createCelulareDto.categoria,
    });

    return this.celularesRepository.save({
      nombre: createCelulareDto.nombre.trim(),
      descripcion: createCelulareDto.descripcion.trim(),
      marca: createCelulareDto.marca.trim(),
      modelo: createCelulareDto.modelo.trim(),
      precio: createCelulareDto.precio,
      stock: createCelulareDto.stock,
      colore: colore,
      categoria: categoria,
    });
  }

  async findAll(): Promise<Celulare[]> {
    return this.celularesRepository
      .createQueryBuilder('celulare')
      .leftJoinAndSelect('celulare.categoria', 'categoria')
      .leftJoinAndSelect('celulare.colore', 'colore')
      .select([
        'celulare.id as id',
        'celulare.descripcion as descripcion',
        'celulare.marca as marca',
        'celulare.modelo as modelo',
        'celulare.nombre as nombre',
        'celulare.precio as precio',
        'celulare.stock as stock',
        'categoria.nombre as categoria',
        'colore.nombre as colore',
      ])
      .getRawMany();
  }

  async findOne(id: number): Promise<Celulare> {
    const celulare = await this.celularesRepository.findOneBy({ id });
    if (!celulare) {
      throw new NotFoundException(`El celular ${id} no existe`);
    }
    return celulare;
  }

  async update(id: number, updateCelulareDto: UpdateCelulareDto) {
    const colore = await this.coloreRepository.findOneBy({
      id: updateCelulareDto.colore,
    });
    const categoria = await this.categoriaRepository.findOneBy({
      id: updateCelulareDto.categoria,
    });

    return this.celularesRepository.update(id, {
      nombre: updateCelulareDto.nombre,
      descripcion: updateCelulareDto.descripcion,
      marca: updateCelulareDto.marca,
      modelo: updateCelulareDto.modelo,
      precio: updateCelulareDto.precio,
      stock: updateCelulareDto.stock,
      colore: colore,
      categoria: categoria,
    });
  }

  async remove(id: number) {
    const celulare = await this.findOne(id);
    return this.celularesRepository.delete(celulare.id);
  }
}
