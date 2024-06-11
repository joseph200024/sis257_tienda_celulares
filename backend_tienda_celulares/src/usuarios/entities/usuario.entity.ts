import * as bcrypt from 'bcrypt';
import { BeforeInsert, BeforeUpdate } from 'typeorm';
export class Usuario {
  






  
  
  
  
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.clave = await bcrypt.hash(this.clave, salt);
  }

  async validatePassword(plainPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, this.clave);
  }
}
