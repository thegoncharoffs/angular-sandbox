import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-ng-switch',
    templateUrl: './ng-switch.component.html',
    styleUrls: ['./ng-switch.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgSwitchComponent {

    public name = 'Pavel';
    private users = ['Boris', 'Pavel', 'Fedor', 'John'];
    private counter = 0;

    public updateUser() {
        this.name = this.users[this.counter % this.users.length];
        this.counter++;
    }
}
