import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Celulare } from 'src/celulares/entities/celulare.entity'; // Asegúrate de que la ruta sea correcta

@Entity('colores')
export class Colore {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, nullable: false })
  nombre: string;

  @OneToMany(() => Celulare, celulare => celulare.colore)
  celulare: Celulare[];
}
