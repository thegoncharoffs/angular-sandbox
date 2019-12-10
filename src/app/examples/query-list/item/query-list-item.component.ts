import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-query-list-item',
    templateUrl: './query-list-item.component.html',
    styleUrls: ['./query-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryListItemComponent {
    @Input()
    public value: number;
}
