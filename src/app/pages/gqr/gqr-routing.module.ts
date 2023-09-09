import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GqrPage } from './gqr.page';

const routes: Routes = [
  {
    path: '',
    component: GqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GqrPageRoutingModule {}
