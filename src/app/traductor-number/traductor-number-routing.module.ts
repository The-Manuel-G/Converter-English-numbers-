import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraductorNumberPage } from './traductor-number.page';

const routes: Routes = [
  {
    path: '',
    component: TraductorNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraductorNumberPageRoutingModule {}
