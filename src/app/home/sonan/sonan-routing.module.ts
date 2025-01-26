import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SonanComponent } from './sonan.component';

const routes: Routes = [
  {
    path: '',
    component: SonanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SonanRoutingModule {}