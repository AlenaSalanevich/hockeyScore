import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login } from '../model/user/login';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { LogIn } from '../authstore/actions/auth.actions';
import { User } from '../model/user/user';
import { AppState } from '../authstore/app.states';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = new Login('', '');
  error: string = '';

  @Output() public onLogin = new EventEmitter<boolean>();

  constructor(private readonly router: Router, private store: Store<AppState>) {
  }

  minPasswordLength: number = 2;
  maxPasswordLength: number = 5;
  minLoginLength: number = 2;
  maxLoginLength: number = 5;

  tryLogin() {
    console.log(this.login.login, this.login.password);
    const payload = {
      login: this.login.login,
      password: this.login.password
    };
    this.store.dispatch(new LogIn(payload));
    this.router.navigateByUrl('/home')
  }
}
