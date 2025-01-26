import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import * as actions from '../actions/actions';

// Generic State Interface
interface GenericState<T> {
  data: null;
  dataLength: number | null;
}

// Generic Reducer Function
function createDataReducer<T>(initialState: GenericState<T>, actionType: any, dataProperty: string) {
  return createReducer(
    initialState,
    on(actionType, (state, { [dataProperty]: data }) => ({
      ...state,
      data: data, // Update the 'data' property directly
      dataLength: data ? data.length : null,
    }))
  );
}

// Create Initial State Function
function createInitialState<T>(): GenericState<T> {
  return {
    data: null,
    dataLength: null,
  };
}

// Define interfaces for states
export interface SonanState extends GenericState<any> {}
export interface AdvicesState extends GenericState<any> {}
export interface ForgettableSonanState extends GenericState<any> {}
export interface AdhkarState extends GenericState<any> {}
export interface WifeSonanState extends GenericState<any> {}

// Define initial states
export const initialSonanState: SonanState = createInitialState<any>();
export const initialAdvicesState: AdvicesState = createInitialState<any>();
export const initialForgettableSonanState: ForgettableSonanState = createInitialState<any>();
export const initialAdhkarState: AdhkarState = createInitialState<any>();
export const initialWifeSonanState: WifeSonanState = createInitialState<any>();

// Create reducers
export const sonanReducer = createDataReducer(initialSonanState, actions.setSonanData, 'sonanData');
export const advicesReducer = createDataReducer(initialAdvicesState, actions.setAdvicesData, 'advicesData');
export const forgettableSonanReducer = createDataReducer(
  initialForgettableSonanState,
  actions.setForgettableSonanData,
  'forgettableSonanData'
);
export const adhkarReducer = createDataReducer(initialAdhkarState, actions.setAdhkarData, 'adhkarData');
export const wifeSonanReducer = createDataReducer(initialWifeSonanState, actions.setWifeSonanData, 'wifeSonanData');

// Create Feature Selectors
function createFeatureSelectors<T>(feature: string, stateSelector: (state: T) => GenericState<any>) {
  const featureSelector = createFeatureSelector<T>(feature);
  const dataSelector = createSelector(featureSelector, (state) => stateSelector(state).data);
  const dataLengthSelector = createSelector(featureSelector, (state) => stateSelector(state).dataLength);

  return { dataSelector, dataLengthSelector };
}

// Create selectors
export const selectSonanState = createFeatureSelectors<SonanState>('sonan', (state) => state);
export const selectAdvicesState = createFeatureSelectors<AdvicesState>('advices', (state) => state);
export const selectForgettableSonanState = createFeatureSelectors<ForgettableSonanState>('forgettableSonan', (state) => state);
export const selectAdhkarState = createFeatureSelectors<AdhkarState>('adhkar', (state) => state);
export const selectWifeSonanState = createFeatureSelectors<WifeSonanState>('wifeSonan', (state) => state);

export const featureReducers = {
  sonan: sonanReducer,
  advices: advicesReducer,
  forgettableSonan: forgettableSonanReducer,
  adhkar: adhkarReducer,
  wifeSonan: wifeSonanReducer,
};
