
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgettableSonanRoutingModule } from './forgettable-sonan-routing.module';
import { ForgettableSonanComponent } from './forgettable-sonan.component';

@NgModule({
  declarations: [ForgettableSonanComponent],
  imports: [
    CommonModule,
    ForgettableSonanRoutingModule,
  ],
})
export class ForgettableSonanModule {}