import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
    selector: 'app-observable',
    templateUrl: './observable.component.html',
    styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

    obs = new Observable(sub => {
        // CB works only after subscription
        sub.next(1);

        setTimeout(() => {
            sub.next(3);
            sub.complete();
        }, 2000);
    });

    constructor() {
    }

    ngOnInit() {
        console.log("Initialized");

        setTimeout(() => {
            console.log("Subscribed");
            this.obs.subscribe(
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
        }, 1000);

        setTimeout(() => {
            console.log("New subscription");
            // Observable runs again all code
            this.obs.subscribe(
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
}
