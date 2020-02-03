import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from "rxjs";
import { share } from 'rxjs/operators';

@Component({
    selector: 'app-share',
    templateUrl: './share.component.html',
    styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit, OnDestroy {
    public observable$ = new Observable<string>((subscriber: Subscriber<string>) => {
        console.log("Subscriber Subscribed");
        setTimeout(() => {
            subscriber.next("1 value");

            setTimeout(() => {
                subscriber.next("2 value");
            });
        });
        return () => {
            console.log("Unsubscribed");
        };
    }).pipe(share());

    private subscription1: Subscription;
    private subscription2: Subscription;
  private subscriptionAll: Subscription;

    public ngOnInit(): void {
        this.subscription1 = this.observable$.subscribe(
            (data: string) => {
                console.log("Next1: " + data);
            }, () => {
                console.log("fail");
            }, () => {
                console.log("complete");
            }
        );
        console.log("1 subscribed");

        this.subscription2 = this.observable$.subscribe(
            (data: string) => {
                console.log("Next2: " + data);
            }, () => {
                console.log("fail");
            }, () => {
                console.log("complete");
            }
        );
        console.log("2 subscribed");

        this.subscription1.add(this.subscription2);
    }

    public ngOnDestroy(): void {
        this.subscription1.unsubscribe();
    }

}
