import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdhkarComponent } from './adhkar.component';

const routes: Routes = [
  {
    path: '',
    component: AdhkarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdhkarRoutingModule {}