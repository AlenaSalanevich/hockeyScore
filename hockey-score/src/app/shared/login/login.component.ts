import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Login } from '../model/user/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;
  error: string;

  @Output() public onLogin = new EventEmitter<boolean>();

  constructor(private readonly router: Router) {
  }

  minPasswordLength: number = 2;
  maxPasswordLength: number = 5;
  minLoginLength: number = 2;
  maxLoginLength: number = 5;

  tryLogin() {
    console.log(this.login.login, this.login.password);
    this.router.navigateByUrl('/home')
  }

  onLoginSelect() {
    const isLogin: boolean = true;
    console.log('click onLoginSelect, emit ' + isLogin);
    this.onLogin.emit(isLogin);
  }

  ngOnInit() {
    this.login = new Login('', '');
    this.error = '';
  }
}
