import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-ng-for-mock',
    templateUrl: './ng-for-mock.component.html',
    styleUrls: ['./ng-for-mock.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgForMockComponent implements OnInit {
    @Input()
    public name: string;

    public ngOnInit(): void {
        console.log("Component with name: " + this.name + ' Initialized');
    }

}
