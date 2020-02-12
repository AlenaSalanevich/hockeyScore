import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private isLogin$: BehaviorSubject<boolean>;
  private isLogin: boolean;
  private subscription: Subscription = new Subscription();

  constructor(private readonly authService: AuthService, private readonly router: Router) {
    this.isLogin$ = this.authService.isLogin;
  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const loginPage = this.router.parseUrl('login');
    this.subscription = this.authService.isLogin.subscribe();
    this.isLogin$.subscribe(result => this.isLogin = result)
    console.log("from AuthGuard: isLogin= " + this.isLogin);
    return this.isLogin ? true : loginPage;
  }
}
