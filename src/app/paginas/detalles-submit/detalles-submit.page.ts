import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-detalles-submit',
  templateUrl: './detalles-submit.page.html',
  styleUrls: ['./detalles-submit.page.scss'],
  standalone: false,
})
export class DetallesSubmitPage {
  producto = {
    nombre: '',
    categoria: '',
    tipoMedida: '', // unidad, peso, porción
    cantidad: 0,
    fechaVencimiento: null, // nueva propiedad
  };

  constructor(private alertController: AlertController) {}

  async guardarProducto() {
    const alerta = await this.alertController.create({
      header: 'Producto guardado',
      message: `
        <strong>${this.producto.nombre}</strong><br>
        Categoría: ${this.producto.categoria}<br>
        Cantidad: ${this.producto.cantidad} (${this.producto.tipoMedida})<br>
        Vencimiento: ${this.producto.fechaVencimiento 
          ? new Date(this.producto.fechaVencimiento).toLocaleDateString() 
          : 'No definido'}
      `,
      buttons: ['OK'],
    });

    await alerta.present();

    console.log('Producto guardado:', this.producto);

    // Limpiar formulario
    this.producto = {
      nombre: '',
      categoria: '',
      tipoMedida: '',
      cantidad: 0,
      fechaVencimiento: null,
    };
  }
}
