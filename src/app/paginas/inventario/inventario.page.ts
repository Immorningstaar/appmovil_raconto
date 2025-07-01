import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
  standalone: false,
})
export class InventarioPage implements OnInit {
  productos: any[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.cargarProductos();
  }

 cargarProductos() {
  this.productosService.getProductos().subscribe((data) => {
    // Palabras clave que parecen de restaurante
    const palabrasClave = ['food', 'drink', 'groceries', 'cooking', 'chocolate', 'oil', 'kitchen'];

    const filtrados = data.products.filter((p: any) => {
      const titulo = p.title.toLowerCase();
      const categoria = p.category.toLowerCase();
      return palabrasClave.some(palabra =>
        titulo.includes(palabra) || categoria.includes(palabra)
      );
    });

    this.productos = filtrados.map((p: any) => ({
      nombre: p.title,
      categoria: p.category,
      stock: p.stock,
      unidad: 'unidades',
      vencimiento: '2025-12-31',
      thumbnail: p.thumbnail
    }));
  });
}

  editar(producto: any) {
    console.log('Editar producto:', producto);
    // Aquí luego puedes abrir un modal o redirigir a otro componente
  }
}
