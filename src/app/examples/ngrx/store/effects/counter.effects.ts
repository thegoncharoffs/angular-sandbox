import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {counterSet, loadValue} from "../actions/counter.actions";

@Injectable()
export class CounterEffects {
  mockValue = 50;

  loadCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadValue),
      mergeMap(() => of(this.mockValue) // Some service over there
        .pipe(
          map(counterValue => counterSet({newValue: 23})),
          catchError(() => of({type: '[Movies API] Movies Loaded Error', payload: {newValue: 100}}))
        )
      )
    )
  );

  constructor(
    private actions$: Actions
  ) {
  }
}
