import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroAcademicoPage } from './registro-academico.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroAcademicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroAcademicoPageRoutingModule {}
