import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarDatosPage } from './editar-datos.page';

const routes: Routes = [
  {
    path: '',
    component: EditarDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarDatosPageRoutingModule {}
