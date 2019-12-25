import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-promise',
    templateUrl: './promise.component.html',
    styleUrls: ['./promise.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromiseComponent implements OnInit {
    constructor(private cdr: ChangeDetectorRef) {
    }

    public result: string = 'Promise will be resolved in 3s';

    public ngOnInit(): void {
        console.log('Before promise');
        const promise = new Promise((resolve, reject) => {
            console.log('Promise started');
            setTimeout(() => resolve('Promise resolved'), 3000);
        });

        promise.then(
            (value: string) => {
                console.log('Promise resolved');
                this.result = value;
                // If OnPush -> detectChanges()
                this.cdr.detectChanges();
            },
            (error) => {
                console.log(error);
            }
        ).finally(
            () => {
                console.log('Finally worked');
            }
        );
    }

}
