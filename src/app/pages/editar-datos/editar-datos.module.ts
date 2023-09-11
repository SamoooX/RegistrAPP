import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarDatosPageRoutingModule } from './editar-datos-routing.module';

import { EditarDatosPage } from './editar-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarDatosPageRoutingModule
  ],
  declarations: [EditarDatosPage]
})
export class EditarDatosPageModule {}
