import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroAcademicoPageRoutingModule } from './registro-academico-routing.module';

import { RegistroAcademicoPage } from './registro-academico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroAcademicoPageRoutingModule
  ],
  declarations: [RegistroAcademicoPage]
})
export class RegistroAcademicoPageModule {}
