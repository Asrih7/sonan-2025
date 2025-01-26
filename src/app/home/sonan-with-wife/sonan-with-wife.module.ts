import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SonanWithWifeRoutingModule } from './sonan-with-wife-routing.module';
import { SonanWithWifeComponent } from './sonan-with-wife.component';

@NgModule({
  declarations: [SonanWithWifeComponent],
  imports: [
    CommonModule,
    SonanWithWifeRoutingModule,
  ],
})
export class SonanWithWifeModule {}