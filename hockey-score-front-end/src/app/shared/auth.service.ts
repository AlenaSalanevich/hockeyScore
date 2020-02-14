import { Injectable } from '@angular/core';
import { Login } from './model/user/login';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from './model/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  public isLogin: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  login(userCredentials: Login) {
    this.httpClient.post<User>('http://localhost:8090/api/auth', userCredentials).subscribe((result: User) => {
      this.currentUser.next(result);
      this.isLogin.next(result.isAuth);
    }, (error: HttpErrorResponse) => {
      console.error();
      this.isLogin.next(false);
      this.currentUser.next(null)
    });
  }

  logout() {
    this.isLogin.next(false);
    this.currentUser.next(null)
  }
}
