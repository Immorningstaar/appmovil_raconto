import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
  host: { 'class': 'page-background' }
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private navCtrl: NavController
  ) { }

  // Método para mostrar alerta de error
  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Función para validar el formato del email
  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular básica para validar email
    return emailRegex.test(email);
  }

  login() {
    // Verificar que el campo de correo no esté vacío
    if (!this.email) {
      this.mostrarAlerta('El campo de correo no puede estar vacío.');
      return;
    }

    // Validar el formato del correo
    if (!this.validarEmail(this.email)) {
      this.mostrarAlerta('El formato del correo es inválido.');
      return;
    }

    // Verificar que la contraseña no esté vacía
    if (!this.password) {
      this.mostrarAlerta('El campo de contraseña no puede estar vacío.');
      return;
    }

    // Verificar que la contraseña tenga máximo 4 caracteres
    if ((this.password.length < 3) && (this.password.length > 8)) {
      this.mostrarAlerta('La contraseña debe temer emtre 3 y 8 caracteres.');
      return;
    }

    //si todas las validaciones son correctas
    localStorage.setItem('usuarioActivo', 'true');

    // Si todas las validaciones son correctas, navega a la página "home"
    localStorage.setItem('email', this.email);
    this.router.navigate(['/home'], { state: { email: this.email } });
  }

  registro() {
    this.navCtrl.navigateForward('/registro');
  }
}