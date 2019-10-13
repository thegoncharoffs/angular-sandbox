import {AppState} from '../app.state';
import {createSelector} from '@ngrx/store';
import {CounterState} from '../reducers/counter.reducer';

export const selectCounter = (state: AppState) => state.counter;

export const selectCounterValue = createSelector(
  selectCounter,
  (state: CounterState) => state.value
);

export const selectCounterLabel = createSelector(
  selectCounter,
  (state: CounterState) => state.label
);
