import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Use CommonModule here
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SonanWithWifeRoutingModule } from './sonan-with-wife-routing.module';
import { SonanWithWifeComponent } from './sonan-with-wife.component';

@NgModule({
  declarations: [SonanWithWifeComponent],
  imports: [
    CommonModule, // Use CommonModule instead of BrowserModule
    IonicModule,
    RouterModule,
    SonanWithWifeRoutingModule,
  ],
  exports: [SonanWithWifeComponent],
})
export class SonanWithWifeModule {}