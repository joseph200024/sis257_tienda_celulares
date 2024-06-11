import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class Venta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 30 })
  metododePago: string;

  @Column('int')
  montoTotal: number;

  @CreateDateColumn({ name: 'fecha_venta' })
  fechaVenta: Date;
}
