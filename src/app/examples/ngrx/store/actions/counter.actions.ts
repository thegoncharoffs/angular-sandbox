import {createAction, props} from '@ngrx/store';

export const counterIncrease = createAction('[Counter Component] Increase value');
export const counterDecrease = createAction('[Counter Component] Decrease value');
export const counterLoadValue = createAction('[Counter Component] Load value');
export const counterLoadFail = createAction('[Counter Component] Load failure');
export const counterSet = createAction(
  '[Counter Component] Set value',
  props<{newValue: number}>()
);

