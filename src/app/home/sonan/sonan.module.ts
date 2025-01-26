import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SonanRoutingModule } from './sonan-routing.module';
import { SonanComponent } from './sonan.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SonanComponent],
  imports: [
    CommonModule,
    IonicModule,
    SonanRoutingModule,
    RouterModule,
  ],
})
export class SonanModule {}
