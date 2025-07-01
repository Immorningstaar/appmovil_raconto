import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiFoodService } from '../../services/api-food.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.page.html',
  styleUrls: ['./buscar-producto.page.scss'],
  standalone: false,
})
export class BuscarProductoPage {
  barcode: string = '';
  product: any = null;
  isLoading: boolean = false;

  constructor(
    private apiFood: ApiFoodService,
    private alertCtrl: AlertController
  ) {}

  async searchProduct() {
    if (!this.barcode.trim()) {
      await this.showAlert('Error', 'Ingresa un código de barras');
      return;
    }

    this.isLoading = true;
    try {
      const response: any = await this.apiFood.getProductByBarcode(this.barcode).toPromise();
      this.product = response?.product;
    } catch (error) {
      await this.showAlert('Error', 'No se pudo obtener el producto');
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  async addToInventory() {
    if (!this.product) {
      await this.showAlert('Error', 'No hay producto seleccionado');
      return;
    }

    this.isLoading = true;
    try {
      // Lógica para guardar en tu base de datos
      await this.showAlert('Éxito', 'Producto agregado al inventario');
      this.resetForm();
    } catch (error) {
      await this.showAlert('Error', 'No se pudo guardar el producto');
      console.error('Error:', error);
    } finally {
      this.isLoading = false;
    }
  }

  private resetForm() {
    this.product = null;
    this.barcode = '';
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}