import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  host: { 'class': 'app-signin' },
})
export class SigninComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) { }

  _form: FormGroup;
  _isSuccessful = false;
  _isLoginFailed = false;
  _errorMessage: string;
  _isLoggedIn = false;
  _roles: string[] = [];

  ngOnInit() {
    this._form = new FormGroup({
      'login': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    });

    if (this.tokenStorage.getToken()) {
      this._isLoggedIn = true;
      this._roles = this.tokenStorage.getUser().roles;
    }
  }

  _onSubmit() {
    const login = this._form.controls.login.value;
    const password = this._form.controls.password.value;

    this.authService.login({
      login,
      password,
    }).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this._isLoginFailed = false;
        this._isLoggedIn = true;
        this._roles = this.tokenStorage.getUser().roles;
        this._reloadPage();
      },
      error => {
        this._errorMessage = error.error.message;
        this._isLoginFailed = true;
      }
    );
  }

  _reloadPage() {
    window.location.reload();
  }
}
