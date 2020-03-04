import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {

    public someText = 'Some Text';

    public _onInput(event: string) {
        console.log(event);
    }
}
