import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login } from '../model/user/login';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;
  error: string;

  @Output() public onLogin = new EventEmitter<boolean>();

  constructor(private readonly router: Router, private readonly authService: AuthService) {
  }

  minPasswordLength: number = 2;
  maxPasswordLength: number = 5;
  minLoginLength: number = 2;
  maxLoginLength: number = 5;

  tryLogin() {
    console.log(this.login.login, this.login.password);
    this.error = this.authService.login(this.login);
    this.router.navigateByUrl('/home')
  }

  ngOnInit() {
    this.login = new Login('', '');
    this.error = '';
  }
}
