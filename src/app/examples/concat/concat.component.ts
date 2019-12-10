import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {concat, of, Subscription} from 'rxjs';

@Component({
    selector: 'app-concat',
    templateUrl: './concat.component.html',
    styleUrls: ['./concat.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConcatComponent implements OnInit, OnDestroy {
    private subscription: Subscription;

    public ngOnInit() {
        this.subscription = concat(
            of(1, 2, 3),
            // subscribed after first completes
            of(4, 5, 6),
            // subscribed after second completes
            of(7, 8, 9)
        ).subscribe(console.log);
        // log: 1, 2, 3, 4, 5, 6, 7, 8, 9
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
