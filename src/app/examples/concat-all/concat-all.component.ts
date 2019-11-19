import {Component, OnInit} from '@angular/core';
import {fromEvent, interval} from 'rxjs';
import {concatAll, map, take} from 'rxjs/operators';

@Component({
    selector: 'app-concat-all',
    templateUrl: './concat-all.component.html',
    styleUrls: ['./concat-all.component.scss']
})
export class ConcatAllComponent implements OnInit {
    public ngOnInit(): void {
        const clicks = fromEvent(document, 'click');
        const higherOrder = clicks.pipe(
            map(() => interval(1000).pipe(take(4))),
        );
        const firstOrder = higherOrder.pipe(concatAll());
        firstOrder.subscribe(x => console.log(x));

        // Results in the following:
        // (results are not concurrent)
        // For every click on the "document" it will emit values 0 to 3 spaced
        // on a 1000ms interval
        // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
    }
}
