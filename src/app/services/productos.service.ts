import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private baseUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getProductos() {
    return this.http.get<any>(this.baseUrl);
  }

  // Obtener un producto específico
  getProducto(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // Buscar por nombre
  buscarProducto(nombre: string) {
    return this.http.get<any>(`${this.baseUrl}/search?q=${nombre}`);
  }

  // Simular agregar producto
  agregarProducto(producto: any) {
    return this.http.post<any>(this.baseUrl + '/add', producto);
  }

  // Simular eliminar producto
  eliminarProducto(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
