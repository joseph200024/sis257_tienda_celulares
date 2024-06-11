import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('empleados')
export class Empleado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 60 })
  cargo: string;

  @Column('int')
  salario: number;

  @CreateDateColumn({ name: 'fecha_contratacion' })
  fechaContratacion: Date;
}
