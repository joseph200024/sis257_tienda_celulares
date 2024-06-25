import { Module } from '@nestjs/common';
import { CelularesService } from './celulares.service';
import { CelularesController } from './celulares.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Celulare } from './entities/celulare.entity';
import { Colore } from 'src/colores/entities/colore.entity';
import { Categoria } from 'src/categorias/entities/categoria.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Celulare]),
    TypeOrmModule.forFeature([Colore]),
    TypeOrmModule.forFeature([Categoria]),
  ],
  controllers: [CelularesController],
  providers: [CelularesService],
})
export class CelularesModule {}
