import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {BooksService} from '../../services/books.service';

@Component({
    selector: 'app-mocks',
    templateUrl: './mocks.component.html',
    styleUrls: ['./mocks.component.scss']
})
export class MocksComponent {

    public books$: Observable<any>;

    constructor(private bookService: BooksService) {
    }

    public _loadMocks() {
        this.books$ = this.bookService.getAllBooks();
    }

}
