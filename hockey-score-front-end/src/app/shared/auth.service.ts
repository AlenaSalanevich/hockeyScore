import { Injectable } from '@angular/core';
import { Login } from './model/user/login';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _isLogin: BehaviorSubject<boolean>;
  private readonly _currentUser: BehaviorSubject<Login>;

  private admin: Login = new Login("Alena", "111");

  private currentUser: Login;

  constructor() {
    this._isLogin = new BehaviorSubject(false);
    this._currentUser = new BehaviorSubject(new Login('', ''))
  }

  login(userCredentials: Login) {
    if (userCredentials.login === this.admin.login && userCredentials.password === this.admin.password) {
      this._isLogin.next(true);
      this._currentUser.next(userCredentials)
      this.currentUser = userCredentials;
    }
    else {
      this._isLogin.next(false);
      this._currentUser.next(new Login("", ""))
    }
  }

  logout() {
    this._isLogin.next(false);
    this._currentUser.next(new Login("", ""))
  }

  /**
   * Get the auth property.
   *
   * @returns {Observable<boolean>} the auth property.
   */
  get isLogin(): BehaviorSubject<boolean> {
    return this._isLogin;
  }

  getUserInfo(): Login {
    return this.currentUser;
  }
  getCurrentUser(): BehaviorSubject<Login> {
    return this._currentUser;
  }
}
