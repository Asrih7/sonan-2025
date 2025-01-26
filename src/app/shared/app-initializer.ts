import { InjectionToken } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSonanData,setAdvicesData, setForgettableSonanData, setAdhkarData, setWifeSonanData } from 'src/app/shared/actions/actions';
import { DataServices } from './home-data.service';
import { forkJoin } from 'rxjs';

export const APP_INITIALIZER_DATA = new InjectionToken('appInitializerData');

export function appInitializer(
  store: Store,
  dataServices: DataServices,
) {
  return () => forkJoin([
    dataServices.getSonan(),
    dataServices.getAdvices(),
    dataServices.getForgettableSonan(),
    dataServices.getAdhkar(),
    dataServices.getWifeSonan(),
  ]).subscribe(([sonanData, advicesData, forgettableSonanData, adhkarData, wifeSonanData]) => {
    store.dispatch(setSonanData({ sonanData }));
    store.dispatch(setAdvicesData({ advicesData }));
    store.dispatch(setForgettableSonanData({ forgettableSonanData }));
    store.dispatch(setAdhkarData({ adhkarData }));
    store.dispatch(setWifeSonanData({ wifeSonanData }));

  });
}
