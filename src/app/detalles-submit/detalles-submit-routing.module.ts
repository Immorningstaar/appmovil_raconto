import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesSubmitPage } from './detalles-submit.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesSubmitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesSubmitPageRoutingModule {}
