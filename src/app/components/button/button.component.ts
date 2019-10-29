import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

    @HostBinding('class.app-button')
    public hostClass = true;
}
