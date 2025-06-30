import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';

import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';  
import { MatIconModule } from '@angular/material/icon';  

import { FormatearFechaPipe } from 'src/app/pipes/formatear-fecha-pipe.pipe';
import { LogoModule } from '../../componentes/logo/logo.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule, 
    MatIconModule,
    LogoModule 
  ],
  declarations: [RegistroPage,FormatearFechaPipe], 
  providers: [FormatearFechaPipe]  // <-- agrega esta línea
})
export class RegistroPageModule {}
