import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
  standalone: false,
})
export class InventarioPage {
editar(producto: any) {
  console.log('Editar producto:', producto);
  // ARREGLAR MAS ADELANTE EN LA BASE DE DATOS
}


  productos = [
    {
      nombre: 'Queso mantecoso',
      categoria: 'Lácteos',
      stock: 12,
      unidad: 'kg',
      vencimiento: '2025-07-01',
    },
    {
      nombre: 'Pechuga de pollo',
      categoria: 'Carnes',
      stock: 8,
      unidad: 'kg',
      vencimiento: '2025-06-25',
    },
    {
      nombre: 'Jugo natural',
      categoria: 'Bebidas',
      stock: 20,
      unidad: 'botellas',
      vencimiento: '2025-07-10',
    },
  ];
}
