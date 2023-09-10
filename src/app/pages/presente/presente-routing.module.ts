import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentePage } from './presente.page';

const routes: Routes = [
  {
    path: '',
    component: PresentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentePageRoutingModule {}
