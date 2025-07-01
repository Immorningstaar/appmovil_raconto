import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  nombreUsuario: string = '';
  rolUsuario: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario() {
    // Obtener datos del usuario desde localStorage
    const nombre = localStorage.getItem('nombre');
    const apellido = localStorage.getItem('apellido');
    const rol = localStorage.getItem('rol');
    
    if (nombre && apellido && rol) {
      this.nombreUsuario = `${nombre} ${apellido}`;
      this.rolUsuario = rol;
    } else {
      this.mostrarAlerta('Error', 'No se encontraron datos de usuario');
      this.router.navigate(['/login']);
    }
  }

  mostrarAgregarProducto(): boolean {
    // Solo ciertos roles pueden agregar productos
    return ['administrador', 'barra', 'cocina'].includes(this.rolUsuario);
  }

  irA(ruta: string) {
    this.router.navigate([`/${ruta}`]);
  }

  async cerrarSesion() {
    const alert = await this.alertController.create({
      header: 'Cerrar sesión',
      message: '¿Estás seguro que deseas salir?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Salir',
          handler: () => {
            this.limpiarSesion();
          }
        }
      ]
    });

    await alert.present();
  }

  limpiarSesion() {
    // Limpiar datos de sesión
    localStorage.removeItem('usuarioActivo');
    localStorage.removeItem('nombre');
    localStorage.removeItem('apellido');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');
    
    // Redirigir al login
    this.router.navigate(['/login']);
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}