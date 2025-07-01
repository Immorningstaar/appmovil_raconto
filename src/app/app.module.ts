import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoModule } from './componentes/logo/logo.module';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { ApiFoodService } from './services/api-food.service';

@NgModule({
  declarations: [AppComponent,   
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, LogoModule, HttpClientModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },SQLite, ApiFoodService],
  bootstrap: [AppComponent],
})
export class AppModule {}
