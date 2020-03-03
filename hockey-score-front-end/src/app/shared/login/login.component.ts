import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login } from '../model/user/login';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { LogIn } from '../authstore/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login;
  error: string;

  @Output() public onLogin = new EventEmitter<boolean>();

  constructor(private readonly router: Router, private readonly authService: AuthService, private store: Store<Login>) {
  }

  minPasswordLength: number = 2;
  maxPasswordLength: number = 5;
  minLoginLength: number = 2;
  maxLoginLength: number = 5;

  tryLogin() {
    console.log(this.login.login, this.login.password);
    this.store.dispatch(new LogIn(this.login));
    this.router.navigateByUrl('/home')
  }
}
