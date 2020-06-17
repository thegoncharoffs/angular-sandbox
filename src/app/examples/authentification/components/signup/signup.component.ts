import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  host: { 'class': 'app-signup' },
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService) { }

  _form: FormGroup;
  _isSuccessful = false;
  _isSignUpFailed = false;
  _errorMessage: string;
  _isLoggedIn = false;

  ngOnInit() {
    this._form = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'login': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    })
    
    this._isLoggedIn = this.authService.isLoggedIn();
  }

  _onSubmit() {
    const userName = this._form.controls.userName.value;
    const login = this._form.controls.login.value;
    const password = this._form.controls.password.value;

    this.authService.register({
      userName,
      login,
      password,
    }).subscribe(
      data => {
        console.log(data);
        this._isSuccessful = true;
        this._isSignUpFailed = false;
      },
      error => {
        this._errorMessage = error.error.message;
        this._isSignUpFailed = true;
      }
    );
  }
}
