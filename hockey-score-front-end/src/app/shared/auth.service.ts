import { Injectable } from '@angular/core';
import { Login } from './model/user/login';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from './model/user/user';
import { AppErrorHandler } from './app-error-handler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpClient: HttpClient, private readonly errorHandler: AppErrorHandler) {
  }

  public currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  public isLogin: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  login(userCredentials: Login) {
    this.httpClient.post<User>('http://localhost:8090/api/login', userCredentials).subscribe((result: User) => {
      this.currentUser.next(result);
      this.isLogin.next(result.isAuth);
    }, (error: HttpErrorResponse) => {
      this.isLogin.next(false);
      this.currentUser.next(null)
      this.errorHandler.handleError(error);
    });
  }

  logout() {
    this.httpClient.get('http://localhost:8090/api/logout').subscribe(() => {
      this.isLogin.next(false);
      this.currentUser.next(null)
    }, (error: HttpErrorResponse) => {
      this.errorHandler.handleError(error);
    });
  }
}
