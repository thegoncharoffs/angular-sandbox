import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

    private subject = new Subject<number>();

    public ngOnInit(): void {
        this.subject.subscribe({
            next: (v) => console.log(`observerA: ${v}`)
        });
        this.subject.subscribe({
            next: (v) => console.log(`observerB: ${v}`)
        });

        // You can make Observable multicast, because subject is also an Observer
        // const observable = from([1, 2, 3]);
        // observable.subscribe(subject); // You can subscribe providing a Subject

        this.subject.next(1);
        this.subject.next(2);
        this.subject.complete();
        // Logs:
        // observerA: 1
        // observerB: 1
        // observerA: 2
        // observerB: 2
    }

    public ngOnDestroy(): void {
        this.subject.unsubscribe();

    }
}
