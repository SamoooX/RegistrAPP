import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GqrPageRoutingModule } from './gqr-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { GqrPage } from './gqr.page';

/* Generarqr */
import { QRCodeModule } from 'angularx-qrcode';
/*  */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GqrPageRoutingModule,
    ComponentsModule,
    QRCodeModule
  ],
  declarations: [GqrPage]
})
export class GqrPageModule {}
