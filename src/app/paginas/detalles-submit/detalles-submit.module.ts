import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesSubmitPageRoutingModule } from './detalles-submit-routing.module';

import { DetallesSubmitPage } from './detalles-submit.page';
import { LogoModule } from 'src/app/componentes/logo/logo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesSubmitPageRoutingModule,
    LogoModule
  ],
  declarations: [DetallesSubmitPage]
})
export class DetallesSubmitPageModule {}
