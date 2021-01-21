import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeberPage } from './deber.page';

const routes: Routes = [
  {
    path: '',
    component: DeberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeberPageRoutingModule {}
