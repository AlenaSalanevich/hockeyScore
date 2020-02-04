import { Injectable } from '@angular/core';
import { Login } from './model/user/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogin: boolean = false;

  private admin: Login = new Login("admin", "admin");

  constructor() {

  }

  login(userCredentials: Login): boolean {
    if (userCredentials.login === this.admin.login && userCredentials.password === this.admin.password) {
      this.isLogin = true;
    }
    else {
      this.isLogin = false;
    }
    return this.isLogin;
  }

  logout(): boolean {
    this.isLogin = false;
    return this.isLogin;
  }


  public getIsLogin(): boolean {
    return this.isLogin;
  }
}
