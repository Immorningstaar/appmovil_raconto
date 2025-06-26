import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage {
  user: any = {
    nombre: 'Juan Pérez',
    correo: 'juan@raconto.cl',
    cargo: 'Chef'
  };

  constructor(private navCtrl: NavController) {}

  cerrarSesion() {
    // Aquí puedes limpiar datos del usuario (ej: localStorage.clear())
    this.navCtrl.navigateRoot('/login');
  }
}
