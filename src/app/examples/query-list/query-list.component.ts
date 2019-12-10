import {AfterViewInit, ChangeDetectionStrategy, Component, QueryList, ViewChildren} from '@angular/core';
import {QueryListItemComponent} from './item/query-list-item.component';

@Component({
    selector: 'app-query-list',
    templateUrl: './query-list.component.html',
    styleUrls: ['./query-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryListComponent implements AfterViewInit {
    @ViewChildren(QueryListItemComponent)
    private itemsComponents: QueryList<QueryListItemComponent>;

    /** @internal */
    public _items: number[] = [1, 2, 3];

    public ngAfterViewInit(): void {
        this.itemsComponents.changes.subscribe((value) => {
            console.log('New QueryList: ', value);
        })
    }

    /** @internal */
    public _addItem() {
        this._items.push(this._items.length + 1);
    }
}
