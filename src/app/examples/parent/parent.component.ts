import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('divElement', {static: false})
    public divElement: ElementRef;

    @ViewChild('anotherDiv', {static: false})
    public anotherDiv: ElementRef;

    constructor() {
    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
        console.log('Parent: ', this.divElement && this.divElement.nativeElement);
    }

    public ngOnDestroy(): void {

    }
}
