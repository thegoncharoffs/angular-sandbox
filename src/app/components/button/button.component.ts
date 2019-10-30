import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'class': 'app-button'}
})
export class ButtonComponent {
}
