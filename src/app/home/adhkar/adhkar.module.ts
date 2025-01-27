import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdhkarRoutingModule } from './adhkar-routing.module';
import { AdhkarComponent } from './adhkar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AdhkarComponent],
  imports: [
    CommonModule,
    AdhkarRoutingModule,
    IonicModule
  ],
})
export class AdhkarModule {}
