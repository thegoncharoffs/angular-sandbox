import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
    selector: 'app-interval',
    templateUrl: './interval.component.html',
    styleUrls: ['./interval.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntervalComponent implements OnInit, OnDestroy {
    private subscription: Subscription;

    public ngOnInit(): void {
        //emit value in sequence every 1 second
        const source = interval(1000);
        //output: 0,1,2,3,4,5....
        this.subscription = source.subscribe(val => console.log(val));
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
