import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children:[
      {
        path: 'asistencia',
        loadChildren: () => import('./../../pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./../../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'presente',
        loadChildren: () => import('./../../pages/presente/presente.module').then( m => m.PresentePageModule)
      },
      {
        path: 'qr',
        loadChildren: () => import('./../../pages/qr/qr.module').then( m => m.QrPageModule)
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
