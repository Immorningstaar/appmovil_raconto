import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root' // Esto permite la inyección en cualquier componente
})
export class ApiFoodService {
  private apiUrl = 'https://world.openfoodfacts.org/api/v2';

  constructor(private http: HttpClient) { }

  // Obtener producto por código de barras
  getProductByBarcode(barcode: string) {
    return this.http.get(`${this.apiUrl}/product/${barcode}.json`);
  }

  // Buscar productos por nombre (opcional)
  searchProducts(query: string) {
    return this.http.get(`${this.apiUrl}/search?search_terms=${query}&json=1`);
  }
}