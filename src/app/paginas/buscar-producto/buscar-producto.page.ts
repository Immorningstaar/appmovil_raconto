import { Component } from '@angular/core';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.page.html',
  styleUrls: ['./buscar-producto.page.scss'],
  standalone: false,
})
export class BuscarProductoPage {
  termino: string = '';
  productos = [
    { nombre: 'Queso mantecoso', categoria: 'Lácteos' },
    { nombre: 'Pechuga de pollo', categoria: 'Carnes' },
    { nombre: 'Jugo natural', categoria: 'Bebidas' },
  ];

  get productosFiltrados() {
    return this.productos.filter(p =>
      p.nombre.toLowerCase().includes(this.termino.toLowerCase())
    );
  }
}
