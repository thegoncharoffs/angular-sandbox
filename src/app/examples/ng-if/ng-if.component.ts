import {Component} from '@angular/core';

@Component({
    selector: 'app-ng-if',
    templateUrl: './ng-if.component.html',
    styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent {
    public flag = true;

    public _click() {
        this.flag = !this.flag;
    }
}
