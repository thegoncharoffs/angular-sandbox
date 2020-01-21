import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class BooksService {

	constructor(private httpClient: HttpClient) {
	}

	private baseUrl: string = 'http://localhost:8080';

	public getAllBooks(): Observable<any> {
		return this.httpClient.get(this.baseUrl + '/books/all');
	}

	public getBookById(id: string): Observable<string> {
		const params = new HttpParams()
			.set('id', id);

		return this.httpClient.get<string>(this.baseUrl + '/books', {params});
	}
}
