import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {map, withLatestFrom} from 'rxjs/operators';
import {interval, Subscription} from 'rxjs';

@Component({
    selector: 'app-with-latest-from',
    templateUrl: './with-latest-from.component.html',
    styleUrls: ['./with-latest-from.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithLatestFromComponent implements OnInit, OnDestroy {
    private subscription: Subscription;

    public ngOnInit() {
        //emit every 5s
        const source = interval(5000);
        //emit every 1s
        const secondSource = interval(1000);
        const example = source.pipe(
            withLatestFrom(secondSource),
            map(([first, second]) => {
                return `First Source (5s): ${first} Second Source (1s): ${second}`;
            })
        );
        /*
          "First Source (5s): 0 Second Source (1s): 4"
          "First Source (5s): 1 Second Source (1s): 9"
          "First Source (5s): 2 Second Source (1s): 14"
          ...
        */
        this.subscription = example.subscribe(val => console.log(val));
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
