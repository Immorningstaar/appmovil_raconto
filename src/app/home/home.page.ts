import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {nombreUsuario = 'Ignacio'; // Simulado (luego vendrá del login)
  rolUsuario = 'admin';      // admin / bodega / cocina

  constructor(private router: Router) {}

  irA(ruta: string) {
    this.router.navigate([`/${ruta}`]);
  }
}