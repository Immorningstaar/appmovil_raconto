import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular'; 
import { DataservicesService } from '../../services/auth-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private dataServices: DataservicesService,
    private navController: NavController,
  ) { }

  async login() {
    this.isLoading = true;
    
    try {
      // Validaciones básicas
      if (!this.email || !this.password) {
        this.mostrarAlerta('Error', 'Todos los campos son obligatorios');
        return;
      }

      if (!this.validarEmail(this.email)) {
        this.mostrarAlerta('Error', 'Formato de email inválido');
        return;
      }

      // Autenticación
      const isAuthenticated = await this.dataServices.loginUser(this.email, this.password);
      
      if (isAuthenticated) {
        const userInfo = await this.dataServices.getUserByEmail(this.email);
        
        if (userInfo) {
          // Guardar información de sesión
          localStorage.setItem('usuarioActivo', 'true');
          localStorage.setItem('email', this.email);
          localStorage.setItem('nombre', userInfo.nombre);
          localStorage.setItem('apellido', userInfo.apellido);
          localStorage.setItem('rol', userInfo.rol);
          
          // Redirección según rol - USANDO TUS RUTAS DEFINIDAS
          this.redirigirSegunRol(userInfo.rol);
        }
      } else {
        this.mostrarAlerta('Error', 'Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error en login:', error);
      this.mostrarAlerta('Error', 'Error al iniciar sesión');
    } finally {
      this.isLoading = false;
    }
  }

  redirigirSegunRol(rol: string) {
    // Usando las rutas definidas en tu AppRoutingModule
    switch(rol) {
      case 'administrador':
        this.router.navigate(['/panel-admin']); // Ruta específica para admin
        break;
      case 'barra':
      case 'cocina':
      case 'garzon':
      default:
        this.router.navigate(['/home']); // Ruta principal para otros roles
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  registro() {
    this.router.navigate(['/registro']);
  }
}