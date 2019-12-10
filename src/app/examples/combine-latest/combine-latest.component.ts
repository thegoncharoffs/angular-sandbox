import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Subscription, timer} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'app-combine-latest',
    templateUrl: './combine-latest.component.html',
    styleUrls: ['./combine-latest.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CombineLatestComponent implements OnInit, OnDestroy {
    private combinedTimersObserver: Subscription;

    public ngOnInit(): void {
        const firstTimer = timer(0, 1000).pipe(
            tap((value) => {
                console.log('timer1: ', value);
            })); // emit 0, 1, 2... after every second, starting from now
        const secondTimer = timer(500, 1000).pipe(
          tap((value) => {
            console.log('timer2: ', value);
          })); // emit 0, 1, 2... after every second, starting 0,5s from now
        const combinedTimers = combineLatest(firstTimer, secondTimer);
        this.combinedTimersObserver = combinedTimers.subscribe(value => console.log(value));
        // Logs
        // [0, 0] after 0.5s
        // [1, 0] after 1s
        // [1, 1] after 1.5s
        // [2, 1] after 2s
    }

    public ngOnDestroy(): void {
        console.log('ngOnDestroy combineLatest');
        // Here we also unsubscribe from both timers
        this.combinedTimersObserver.unsubscribe();
    }
}
