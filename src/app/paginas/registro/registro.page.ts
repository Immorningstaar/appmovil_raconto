import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular';  
import { FormatearFechaPipe } from '../../pipes/formatear-fecha-pipe.pipe'
import { DataservicesService } from '../../services/auth-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {

  nombre: string = '';
  apellido: string = ''; 
  rut: string = '';
  email: string = '';
  password: string = '';
  rol: string = 'garzon'; // Valor por defecto
  fechaNacimiento: any = '';
  registroStatus: string = '';

  constructor(
    private alertController: AlertController, 
    private menu: MenuController,
    private formtearFechaPipe: FormatearFechaPipe,
    private dataServices: DataservicesService
  ) { }

  ngOnInit() {
    this.menu.close("mainMenu");
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async guardar() { 
    const fechaFormateada = this.formtearFechaPipe.transform(this.fechaNacimiento);

    if (!this.validarCampos()) {
      return;
    }

    if (!this.validarRUT(this.rut)) {
      this.presentAlert('Error: El RUT ingresado no es válido');
      return;
    }

    await this.registrar();
  }

  validarCampos(): boolean {
    if (!this.nombre.trim() || !this.apellido.trim() || !this.rut.trim() || 
        !this.email.trim() || !this.password || !this.rol) {
      this.presentAlert('Error: Todos los campos son obligatorios');
      return false;
    }
    return true;
  }

  validarRUT(rut: string): boolean {
    // Implementa tu lógica de validación de RUT aquí
    // Ejemplo básico (debes implementar la validación real)
    return rut.length > 0; // Esto es solo un placeholder
  }

  async registrar() {
    try {
      // Verificar si el RUT ya existe
      const rutExists = await this.dataServices.checkRutExists(this.rut);
      if (rutExists) {
        this.presentAlert('Error: El RUT ya está registrado');
        return;
      }

      // Verificar si el email ya existe
      const emailExists = await this.dataServices.getUserByEmail(this.email);
      if (emailExists) {
        this.presentAlert('Error: El email ya está registrado');
        return;
      }

      const success = await this.dataServices.registerUser(
        this.nombre,
        this.apellido,
        this.rut,
        this.email,
        this.password,
        this.rol,
        this.fechaNacimiento
      );

      if (success) {
        this.presentAlert('Registro exitoso');
        this.limpiarFormulario();
      } else {
        this.presentAlert('Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      this.presentAlert('Error inesperado al registrar');
    }
  }

  limpiarFormulario() {
    this.nombre = '';
    this.apellido = '';
    this.rut = '';
    this.email = '';
    this.password = '';
    this.rol = 'garzon';
    this.fechaNacimiento = '';
  }
}