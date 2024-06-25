import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Celulare } from 'src/celulares/entities/celulare.entity'; // Asegúrate de que la ruta sea correcta

@Entity('categorias')
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  nombre: string;

  @Column({ length: 200, nullable: false })
  descripcion: string;

  @OneToMany(() => Celulare, celulare => celulare.categoria)
  celulare: Celulare[];
}
