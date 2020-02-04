import { Injectable } from '@angular/core';
import { Login } from './model/user/login';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _isLogin: BehaviorSubject<boolean>;

  private admin: Login = new Login("admin", "admin");

  constructor() {
    this._isLogin = new BehaviorSubject(false);

  }

  login(userCredentials: Login) {
    if (userCredentials.login === this.admin.login && userCredentials.password === this.admin.password) {
      this._isLogin.next(true);
    }
    else {
      this._isLogin.next(false);
    }
  }

  logout() {
    this._isLogin.next(false);
  }

  /**
   * Get the auth property.
   *
   * @returns {Observable<boolean>} the auth property.
   */
  get isLogin() {
    return this._isLogin;
  }
}
