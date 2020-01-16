import {Component, OnDestroy, OnInit} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Component({
    selector: 'app-replay-subject',
    templateUrl: './replay-subject.component.html',
    styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit, OnDestroy {

    private subject = new ReplaySubject(3, /* 500 windowTime */); // buffer 3 values for new subscribers

    public ngOnInit(): void {

        this.subject.subscribe({
            next: (v) => console.log(`observerA: ${v}`)
        });

        this.subject.next(1);
        this.subject.next(2);
        this.subject.next(3);
        this.subject.next(4);

        this.subject.subscribe({
            next: (v) => console.log(`observerB: ${v}`)
        });

        this.subject.next(5);

        // Logs:
        // observerA: 1
        // observerA: 2
        // observerA: 3
        // observerA: 4
        // observerB: 2
        // observerB: 3
        // observerB: 4
        // observerA: 5
        // observerB: 5
    }

    public ngOnDestroy(): void {
        this.subject.unsubscribe();
    }

}
