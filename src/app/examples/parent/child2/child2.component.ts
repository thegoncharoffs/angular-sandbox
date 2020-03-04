import {
    AfterViewInit,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
    ContentChild,
    ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'app-child2',
    templateUrl: './child2.component.html',
    styleUrls: ['./child2.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit, AfterViewInit, OnDestroy {
    @ContentChild('divElement')
    public divElement: ElementRef;

    constructor() {
    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
        console.log('Child2: ', this.divElement?.nativeElement);
    }

    public ngOnDestroy(): void {

    }
}
