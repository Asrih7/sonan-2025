import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgettableSonanComponent } from './forgettable-sonan.component';

const routes: Routes = [
  {
    path: '',
    component: ForgettableSonanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgettableSonanRoutingModule {}