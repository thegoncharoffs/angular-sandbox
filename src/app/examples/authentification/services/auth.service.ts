import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cridentials } from '../models/cridentials.model';
import { User } from '../models/user.model';
import { TokenStorageService } from './token-storage.service';
import { BASE_URL } from '../config';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService,
  ) { }

  login(credentials: Cridentials): Observable<any> {
    return this.http.post(BASE_URL + 'signin', {
      login: credentials.login,
      password: credentials.password
    }, httpOptions);
  }

  register(user: User): Observable<any> {
    return this.http.post(BASE_URL + 'signup', {
      userName: user.userName,
      login: user.login,
      password: user.password
    }, httpOptions);
  }

  isLoggedIn(): boolean {
    return !!this.tokenStorage.getToken();
  }
}