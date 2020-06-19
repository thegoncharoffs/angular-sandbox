import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";
import { BASE_URL } from '../config';

@Injectable()
export class UploadService {

    constructor(private http: HttpClient) { }

    // file from event.target.files[0]
    uploadFile(file: File): Observable<any> {

        let formData = new FormData();
        formData.append('file', file);
        
        return this.http.post(BASE_URL + 'upload', formData);
    }
}