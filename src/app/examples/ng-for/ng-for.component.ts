import {Component} from '@angular/core';

export interface Item {
    id: number;
    name: string;
}

@Component({
    selector: 'app-ng-for',
    templateUrl: './ng-for.component.html',
    styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {

    public items: Item[] = [
        {id: 1, name: 'Boris'},
        {id: 2, name: 'Pavel'},
        {id: 3, name: 'Fedor'},
        {id: 4, name: 'Maxim'},
        {id: 5, name: 'Nikita'},
        {id: 6, name: 'Igor'},
    ];

    public refreshCollection(): void {
        this.items = JSON.parse(JSON.stringify(this.items));
    }

    public addJohn(): void {
        this.items.push({id: this.items.length + 1, name: 'John'});
    }

    public changeOrder(): void {
        const item = this.items.shift();
        this.items.push(item);
    }

    public trackByFn(index, item: Item): number {
        return item.id;
    }
}
