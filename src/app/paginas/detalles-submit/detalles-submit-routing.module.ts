import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoModule } from '../../componentes/logo/logo.module'
import { DetallesSubmitPage } from './detalles-submit.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesSubmitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    LogoModule,
  ],
  exports: [RouterModule],
})
export class DetallesSubmitPageRoutingModule {}
