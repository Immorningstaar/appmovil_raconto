import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.page.html',
  styleUrls: ['./panel-admin.page.scss'],
  standalone: false,
})
export class PanelAdminPage {
  totalProductos = 125;
  stockBajo = 8;
  productosPorMermar = 12;
  totalUsuarios = 5;

  exportarExcel() {
    // Aquí iría la lógica para exportar (por ahora puede ser una alerta)
    alert('Exportación simulada (puedes implementar XLSX más adelante)');
  }
}
