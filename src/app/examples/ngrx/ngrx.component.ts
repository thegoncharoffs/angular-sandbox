import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState} from './store/app.state';
import {select, Store} from '@ngrx/store';
import {selectCounterValue} from './store/selectors/counter.selectors';
import {counterDecrease, counterIncrease, counterSet, counterLoadValue} from './store/actions/counter.actions';

@Component({
    selector: 'app-ngrx',
    templateUrl: './ngrx.component.html',
    styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent {
    public value$: Observable<number> = this.store.pipe(select(selectCounterValue));

    constructor(private store: Store<AppState>) {
    }

    public _increase(): void {
        this.store.dispatch(counterIncrease());
    }

    public _decrease(): void {
        this.store.dispatch(counterDecrease());
    }

    public _setValue(value: number): void {
        this.store.dispatch(counterSet({newValue: value}));
    }

    public _loadValue(): void {
        this.store.dispatch(counterLoadValue());
    }
}
