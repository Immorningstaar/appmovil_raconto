import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';

@NgModule({
  declarations: [LogoComponent],
  imports: [CommonModule],
  exports: [LogoComponent] // 👈 permite usarlo en otros módulos
})
export class LogoModule {}
