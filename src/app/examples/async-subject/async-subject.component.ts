import {Component, OnInit} from '@angular/core';
import {AsyncSubject} from 'rxjs';

@Component({
    selector: 'app-async-subject',
    templateUrl: './async-subject.component.html',
    styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

    private subject = new AsyncSubject();

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
        this.subject.complete();
    }

    public ngOnDestroy(): void {
        this.subject.unsubscribe();
    }
}
