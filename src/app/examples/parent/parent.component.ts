import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit, OnDestroy {

    public someText = 'Some Text';

    constructor() {
    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {

    }

    public _onInput(event: string) {
        console.log(event);
    }
}
