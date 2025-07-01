import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx'; 

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  public dbInstance!: SQLiteObject; 

  constructor(private sqlite: SQLite) { 
     this.initializeDatabase();
  }

  async initializeDatabase() {
    this.dbInstance = await this.sqlite.create({
      name: 'raconto.db',
      location: 'default',
    });
    await this.createTables();
  }

  // Crear tabla con la nueva estructura
  async createTables() {
    await this.dbInstance.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        apellido TEXT NOT NULL,
        rut TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        rol TEXT NOT NULL,
        fecha_nacimiento TEXT
      )`,
      []
    );
  }

  // Registrar usuario con los nuevos campos
  async registerUser(
    nombre: string, 
    apellido: string, 
    rut: string, 
    email: string, 
    password: string, 
    rol: string, 
    fechaNacimiento: string
  ): Promise<boolean> {
    try {
      await this.dbInstance.executeSql(
        `INSERT INTO usuarios (nombre, apellido, rut, email, password, rol, fecha_nacimiento)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [nombre, apellido, rut, email, password, rol, fechaNacimiento]
      );
      return true;
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      return false;
    }
  }

  // Método para iniciar sesión
  async loginUser(email: string, password: string): Promise<boolean> {
    const result = await this.dbInstance.executeSql(
      'SELECT * FROM usuarios WHERE email = ? AND password = ?',
      [email, password]
    );
    return result.rows.length > 0;
  }

  // Método adicional para obtener información del usuario por email
  async getUserByEmail(email: string): Promise<any> {
    const result = await this.dbInstance.executeSql(
      'SELECT * FROM usuarios WHERE email = ?',
      [email]
    );
    if (result.rows.length > 0) {
      return result.rows.item(0);
    }
    return null;
  }

  // Método para verificar si un RUT ya existe
  async checkRutExists(rut: string): Promise<boolean> {
    const result = await this.dbInstance.executeSql(
      'SELECT 1 FROM usuarios WHERE rut = ?',
      [rut]
    );
    return result.rows.length > 0;
  }
}