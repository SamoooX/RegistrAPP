import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentePageRoutingModule } from './presente-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PresentePage } from './presente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentePageRoutingModule,
    ComponentsModule
  ],
  declarations: [PresentePage]
})
export class PresentePageModule {}
