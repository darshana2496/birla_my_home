import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APFComponent } from './apf.component';

const routes: Routes = [
  {
    path: '',
    component: APFComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class APFRoutingModule { }
