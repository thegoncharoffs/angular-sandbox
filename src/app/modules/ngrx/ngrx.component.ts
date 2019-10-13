import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState} from './store/app.state';
import {select, Store} from '@ngrx/store';
import {selectCounterLabel, selectCounterValue} from './store/selectors/counter.selectors';
import {counterDecrease, counterIncrease, counterSet, loadValue} from "./store/actions/counter.actions";

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent implements OnInit {
  public value$: Observable<number>;
  public label$: Observable<string>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.value$ = this.store.pipe(select(selectCounterValue));
    this.label$ = this.store.pipe(select(selectCounterLabel));
  }

  public _increase(): void {
    this.store.dispatch(counterIncrease());
  }

  public _decrease(): void {
    this.store.dispatch(counterDecrease());
  }

  public _setValue(): void {
    this.store.dispatch(counterSet({newValue: 20}));
  }

  public _loadValue(): void {
    this.store.dispatch(loadValue());
  }
}
