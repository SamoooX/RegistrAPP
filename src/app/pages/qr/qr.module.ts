import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrPageRoutingModule } from './qr-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { QrPage } from './qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrPageRoutingModule,
    ComponentsModule
  ],
  declarations: [QrPage]
})
export class QrPageModule {}
