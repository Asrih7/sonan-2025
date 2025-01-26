// actions.ts
import { createAction, props } from '@ngrx/store';

export const setSonanData = createAction
('[Sonan] Set Sonan Data',
 props<{ sonanData: any }>());

export const setAdhkarData = createAction(
  '[Adhkar Component] Set Adhkar Data',
  props<{ adhkarData: any }>()
);

export const setAdvicesData = createAction(
  '[Advices Component] Set advices Data',
  props<{ advicesData: any }>()
);

export const setForgettableSonanData = createAction(
  '[Forgettable Sonan Component] Set Sonan Data',
  props<{ forgettableSonanData: any }>()
);



export const setWifeSonanData = createAction(
  '[Wife Sonan Component] Set Wife Sonan Data',
  props<{ wifeSonanData: any }>()
);

