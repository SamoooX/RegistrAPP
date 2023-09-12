import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
/*  */
import { DataService } from './app.component';
/*  */
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  /*  */
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DataService],
  /*  */
  bootstrap: [AppComponent],
})
export class AppModule {}
