import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SonanWithWifeComponent } from './sonan-with-wife.component';

const routes: Routes = [
  {
    path: '',
    component: SonanWithWifeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SonanWithWifeRoutingModule {}