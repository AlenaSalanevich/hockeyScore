import { Component, OnInit, Input } from '@angular/core';
import { Login } from '../model/user/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;
  error: string;

  constructor() {

  }

  minPasswordLength: number = 2;
  maxPasswordLength: number = 5;
  minLoginLength: number = 2;
  maxLoginLength: number = 5;

  tryAuth() {
    console.log(this.login.login, this.login.password);
  }

  ngOnInit() {
    this.login = new Login('', '');
    this.error = '';
  }
}
