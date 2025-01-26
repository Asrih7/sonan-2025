import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdhkarRoutingModule } from './adhkar-routing.module';
import { AdhkarComponent } from './adhkar.component';

@NgModule({
  declarations: [AdhkarComponent],
  imports: [
    CommonModule,
    AdhkarRoutingModule,
  ],
})
export class AdhkarModule {}
