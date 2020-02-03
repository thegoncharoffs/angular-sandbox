import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-observable',
    templateUrl: './observable.component.html',
    styleUrls: ['./observable.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservableComponent implements OnInit, OnDestroy {

    private observable$ = new Observable(sub => {
        console.log("Subscriber subscribed");
        // CB works only after subscription
        sub.next('First value');

        setTimeout(() => {
            sub.next('Second value');
            sub.complete();
        }, 2000);

        return () => {
            console.log('Unsubscribed');
        };
    });

    private subscription1: Subscription;
    private subscription2: Subscription;

    public ngOnInit(): void {

        this.subscription1 = this.observable$.subscribe(
            (data) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            },
            () => {
                console.log("Completed");
            });


        setTimeout(() => {
            // Observable runs again all code
            this.subscription2 = this.observable$.subscribe(
                (data) => {
                    console.log(data);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    console.log("Completed");
                }
            );
        }, 10000);
    }

    public ngOnDestroy(): void {
        this.subscription1 && this.subscription1.unsubscribe();
        this.subscription2 && this.subscription2.unsubscribe();
    }
}
