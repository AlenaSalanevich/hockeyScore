import { Injectable } from '@angular/core';
import { Login } from './model/user/login';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './model/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  public isLogin: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  login(userCredentials: Login): Observable<User> {
    return this.httpClient.post<User>('http://localhost:8090/api/login', userCredentials);
  }

  logout() {
    return this.httpClient.get('http://localhost:8090/api/logout');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
