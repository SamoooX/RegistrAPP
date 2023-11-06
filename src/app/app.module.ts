import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
/*  */
import { DataService } from './app.component';
/*  */

// ====== FireBase ======//

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  /*  */
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DataService, BarcodeScanner,
  ],
  /*  */
  bootstrap: [AppComponent],
})
export class AppModule {}
