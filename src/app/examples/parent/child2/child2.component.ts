import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ContentChild} from '@angular/core';

@Component({
    selector: 'app-child2',
    templateUrl: './child2.component.html',
    styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit, AfterViewInit, OnDestroy {
    @ContentChild('divElement', {static: false})
    public divElement: ElementRef;

    constructor() {
    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
        console.log('Child2: ', this.divElement && this.divElement.nativeElement);
    }

    public ngOnDestroy(): void {

    }
}
