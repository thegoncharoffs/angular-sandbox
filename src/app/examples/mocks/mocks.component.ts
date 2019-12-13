import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {BooksModel} from '../../models/books.model';
import {BooksService} from '../../services/books.service';

@Component({
    selector: 'app-mocks',
    templateUrl: './mocks.component.html',
    styleUrls: ['./mocks.component.scss']
})
export class MocksComponent {

    public mocks$: Observable<BooksModel>;

    constructor(private bookService: BooksService) {
    }

    public _loadMocks() {
        this.mocks$ = this.bookService.getAllBooks();
    }

}
