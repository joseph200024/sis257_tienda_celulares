import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 60 })
  nombre: string;

  @Column('varchar', { length: 5000 })
  descripcion: string;

  @Column('varchar', { length: 100 })
  marca: string;

  @Column('int')
  precio: number;

  @Column('int')
  stock: number;
}
