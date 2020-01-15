import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConnectableObservable, from, Subject, Subscription} from 'rxjs';
import {multicast} from 'rxjs/operators';

@Component({
    selector: 'app-multicast-observable',
    templateUrl: './multicast-observable.component.html',
    styleUrls: ['./multicast-observable.component.scss']
})
export class MulticastObservableComponent implements OnInit, OnDestroy {

    private source = from([1, 2, 3]);

    private subject = new Subject();

    // TS issue, it thinks that after pipe we always return Observable
    private multicasted: ConnectableObservable<number> = this.source.pipe(multicast(this.subject)) as ConnectableObservable<number>;

    private subscription: Subscription;

    public ngOnInit(): void {
        // These are, under the hood, `subject.subscribe({...})`:
        this.multicasted.subscribe({
            next: (v) => console.log(`observerA: ${v}`)
        });
        this.multicasted.subscribe({
            next: (v) => console.log(`observerB: ${v}`)
        });

        // This is, under the hood, `source.subscribe(subject)`:
        this.subscription = this.multicasted.connect();
    }

    public ngOnDestroy(): void {
        this.subject.unsubscribe();
        this.subscription.unsubscribe();
    }

}
