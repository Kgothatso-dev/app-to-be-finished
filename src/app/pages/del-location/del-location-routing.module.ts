import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelLocationPage } from './del-location.page';

const routes: Routes = [
  {
    path: '',
    component: DelLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelLocationPageRoutingModule {}
