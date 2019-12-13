import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BooksModel} from '../models/books.model';

@Injectable()
export class BooksService {

    constructor(private http: HttpClient) {
    }

    private baseUrl: string = 'http://localhost:8080';

    public getAllBooks(): Observable<BooksModel> {
        return this.http.get<BooksModel>(this.baseUrl + 'books/all');
    }

    public getBookById(id: string): Observable<BooksModel> {
        const params = new HttpParams()
            .set('id', id);

        return this.http.get<BooksModel>(this.baseUrl + 'books',{params});
    }
}
