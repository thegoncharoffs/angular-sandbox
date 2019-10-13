import {createAction, props} from '@ngrx/store';

export const counterIncrease = createAction('[Counter Component] Increase value');
export const counterDecrease = createAction('[Counter Component] Decrease value');
export const loadValue = createAction('[Counter Component] Load value');
export const counterSet = createAction(
  '[Counter Component] Set value',
  props<{newValue: number}>()
);

