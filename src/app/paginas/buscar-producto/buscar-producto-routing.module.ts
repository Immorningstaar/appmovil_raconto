import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarProductoPage } from './buscar-producto.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarProductoPageRoutingModule {}
