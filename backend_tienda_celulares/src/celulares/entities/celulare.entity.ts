import { Categoria } from 'src/categorias/entities/categoria.entity';
import { Colore } from 'src/colores/entities/colore.entity';
//import { Compra } from 'src/compras/entities/compra.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  //OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('celulares')
export class Celulare {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100, nullable: false })
  nombre: string;

  @Column('varchar', { length: 200, nullable: false })
  descripcion: string;

  @Column('varchar', { length: 100, nullable: false })
  marca: string;

  @Column('varchar', { length: 100, nullable: false })
  modelo: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  precio: number;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @Column('int', { nullable: false })
  stock: number;

  @ManyToOne(() => Colore, colore => colore.celulare)
  colore: Colore;

  @ManyToOne(() => Categoria, categoria => categoria.celulare)
  categoria: Categoria;

  //@OneToMany(() => Compra, (compra) => compra.celulare) // Relación One-to-Many con Compra
  //compras: Compra[];
}
