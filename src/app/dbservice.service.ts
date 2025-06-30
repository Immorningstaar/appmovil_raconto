import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  public db!: SQLiteObject;
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private toastController: ToastController) {
    this.initDatabase();
  }

  private initDatabase(): void {
    this.sqlite.create({
      name: 'mydatabase.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.db = db;
      this.createTables();
      this.isDBReady.next(true); //emitimios true cuando la base de datos esta lista
      this.presentToast('Base de datos inicializada con éxito');
    }).catch(error => console.log(error));
  }

  private async presentToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }

  // Crear tabla
  private createTables(): void {
    this.db.executeSql(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        apellido TEXT NOT NULL,
        rut TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        rol TEXT NOT NULL,
        fecha_nacimiento TEXT
      )`, []
    ).then(() => this.presentToast('Tabla usuarios creada'))
     .catch(error => this.presentToast('Error al crear tabla: ' + error));
  }

//validar usuario
async validateUsuario(email: string, password: string): Promise<boolean> {
  try {
    const res = await this.db.executeSql(
      `SELECT * FROM usuarios WHERE email = ? AND password = ?`,
      [email, password]
    );

    if (res.rows.length > 0) {
      this.presentToast('Inicio de sesión exitoso');
      return true; // Usuario válido
    } else {
      this.presentToast('Credenciales incorrectas');
      return false; // Usuario no encontrado
    }
  } catch (error) {
    this.presentToast('Error al validar usuario: ' + error);
    return false;
  }
}


  // Insertar usuario
  async insertUsuario(
    nombre: string,
    apellido: string,
    rut: string,
    password: string,
    rol: string,
    fechaNacimiento: string,
    email: string
  ): Promise<void> {
    try {
      await this.db.executeSql(
        `INSERT INTO usuarios (nombre, apellido, rut, email, password, rol, fecha_nacimiento)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [nombre, apellido, rut, email, password, rol, fechaNacimiento]
      );
      this.presentToast('Usuario insertado correctamente');
    } catch (error) {
      this.presentToast('Error al insertar usuario: ' + error);
    }
  }


getIsDBReady(): Observable<boolean> {
  return this.isDBReady.asObservable();
}
}