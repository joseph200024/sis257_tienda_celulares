import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 40 })
  nombres: string;

  @Column('varchar', { length: 60 })
  apellidos: string;

  @Column('int')
  telefono: number;
}
