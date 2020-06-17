import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  publicContent$: Observable<any>;
  userContent$: Observable<any>;
  moderatorContent$: Observable<any>;
  adminContent$: Observable<any>;
  isLoggedIn: boolean;


  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.publicContent$ = this.userService.getPublicContent();
    this.userContent$ = this.userService.getUserBoard();
    this.moderatorContent$ = this.userService.getModeratorBoard();
    this.adminContent$ = this.userService.getAdminBoard();
    this.isLoggedIn = this.authService.isLoggedIn();
  }



}
