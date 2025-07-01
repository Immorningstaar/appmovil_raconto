import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenFoodService {

  constructor(private http: HttpClient) {}

  buscarProductos(termino: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${termino}&search_simple=1&action=process&json=1`;
    return this.http.get<any>(url);
  }
}
