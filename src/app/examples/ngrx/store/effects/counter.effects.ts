import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {counterSet, counterLoadFail, counterLoadValue} from '../actions/counter.actions';

@Injectable()
export class CounterEffects {
    mockValue = 50;

    loadCounter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(counterLoadValue),
            mergeMap(() => of(this.mockValue) // Some service over there
                .pipe(
                    map(counterValue => counterSet({newValue: counterValue})),
                    catchError(() => of(counterLoadFail()))
                )
            )
        )
    );

    constructor(
        private actions$: Actions
    ) {
    }
}
