import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
    selector: 'app-take',
    templateUrl: './take.component.html',
    styleUrls: ['./take.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TakeComponent implements OnInit {

    public ngOnInit(): void {
        const intervalCount = interval(1000);
        const takeFive = intervalCount.pipe(take(5));
        takeFive.subscribe(x => console.log(x));
        // Logs:
        // 0
        // 1
        // 2
        // 3
        // 4
    }
}
