import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('proveedores')
export class Proveedore {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 100 })
  nombre: string;

  @Column('varchar', { length: 200 })
  direccion: string;

  @Column('varchar', { length: 50 })
  gmail: string;

  @Column('int')
  telefono: number;
}
