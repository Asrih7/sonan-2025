// app.module.ts
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { APP_INITIALIZER_DATA, appInitializer } from './shared/app-initializer'; 

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { Store, StoreModule } from '@ngrx/store';
import { DataServices } from './shared/home-data.service';

import { AppComponent } from './app.component';

import { SonanWithWifeModule } from './home/sonan-with-wife/sonan-with-wife.module';

import * as allReducers from './shared/reducer/reducer';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    SonanWithWifeModule,
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      sonan: allReducers.sonanReducer,
      advices: allReducers.advicesReducer,
      forgettableSonan: allReducers.forgettableSonanReducer,
      adhkar: allReducers.adhkarReducer,
      wifeSonan: allReducers.wifeSonanReducer,

    }),
  ],
  providers: [
    DataServices,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [Store, DataServices],
    },
    { provide: APP_INITIALIZER_DATA, useValue: 'initialization data' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
