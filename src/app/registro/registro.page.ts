import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular';  
import { FormatearFechaPipe } from 'src/app/pipes/formatear-fecha-pipe.pipe';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
  host: { 'class': 'page-background' }
})
export class RegistroPage implements OnInit {

  // Variables para almacenar datos del formulario
  nombre: string = '';
  apellido: string = '';
  selectedOption: string = ''; // nivel de complejidad
  selectedDate: string = '';
  usuario: string = '';
  password: string = '';

  constructor(
    private alertController: AlertController, 
    private menu: MenuController,
    private formatearFechaPipe: FormatearFechaPipe
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

  guardar() { 
    const fechaFormateada = this.formatearFechaPipe.transform(this.selectedDate);

    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacíos');
    } else {
      this.presentAlert('Datos Correctos - usuario: ' + this.nombre + ' fecha nacimiento: ' + fechaFormateada);
    }
  }
}