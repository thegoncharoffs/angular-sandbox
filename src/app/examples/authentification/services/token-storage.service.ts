import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

/*
 TokenStorageService to manages token and user information (username, email, roles) inside Session Storage. 
 For Logout, we only need to clear this Session Storage.
*/
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  signOut(): void {
    sessionStorage.clear();
  }

  saveToken(token: string): void {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  saveUser(user: User): void {
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}