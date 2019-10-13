import * as CounterActions from '../actions/counter.actions';

import {Action, createReducer, on} from '@ngrx/store';

export interface CounterState {
  label: string;
  value: number;
}

export const initialCounterState: CounterState = {
  label: 'Some text',
  value: 0,
};

const counterReducer = createReducer(
  initialCounterState,
  on(CounterActions.counterIncrease, state => ({...state, value: state.value + 1})),
  on(CounterActions.counterDecrease, state => ({...state, value: state.value - 1})),
  on(CounterActions.counterSet, (state, {value}) => ({...state, value: value})),
);

export default function reducer(state: CounterState | undefined, action: Action) {
  return counterReducer(state, action);
}
