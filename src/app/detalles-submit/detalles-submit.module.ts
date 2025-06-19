import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesSubmitPageRoutingModule } from './detalles-submit-routing.module';

import { DetallesSubmitPage } from './detalles-submit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesSubmitPageRoutingModule
  ],
  declarations: [DetallesSubmitPage]
})
export class DetallesSubmitPageModule {}
