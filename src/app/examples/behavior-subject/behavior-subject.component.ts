import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'app-behavior-subject',
    templateUrl: './behavior-subject.component.html',
    styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit, OnDestroy {

    private subject = new BehaviorSubject(0); // 0 is the initial value

    public ngOnInit(): void {

        this.subject.subscribe({
            next: (v) => console.log(`observerA: ${v}`)
        });

        this.subject.next(1);
        this.subject.next(2);

        this.subject.subscribe({
            next: (v) => console.log(`observerB: ${v}`)
        });

        this.subject.next(3);

        // Logs
        // observerA: 0
        // observerA: 1
        // observerA: 2
        // observerB: 2
        // observerA: 3
        // observerB: 3
    }

    public ngOnDestroy(): void {
        this.subject.unsubscribe();
    }

}
