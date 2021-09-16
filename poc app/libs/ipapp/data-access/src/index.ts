import * as UISelector  from './lib/+state/ui.selectors';
import * as UIActions from './lib/+state/ui.actions';
import { ExIPatRecState, reducer, uiFeatureKey } from './lib/+state/ui.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
export { UIActions, UISelector };
export * from './lib/+state/ui.models';
export * from './lib/+state/ui.actions';
export * from './lib/+state/ui.reducer';
export * from './lib/+state/ui.selectors';
export * from './lib/+state/ui.models';
export * from './lib/ipapp-data-access.module';

export interface State {

    [uiFeatureKey]: ExIPatRecState;
  }
  
//   export const reducers: ActionReducerMap<State> = {
  
//     ["ui"]: reducer,
//   };
  
  
//   export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
  