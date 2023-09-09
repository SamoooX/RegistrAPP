import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GqrPageRoutingModule } from './gqr-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { GqrPage } from './gqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GqrPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GqrPage]
})
export class GqrPageModule {}
