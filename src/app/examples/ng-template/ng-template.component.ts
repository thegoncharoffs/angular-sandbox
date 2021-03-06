import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-ng-template',
    templateUrl: './ng-template.component.html',
    styleUrls: ['./ng-template.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgTemplateComponent {

    public context = {
        value: 3,
        text: 'hello',
    };
}
