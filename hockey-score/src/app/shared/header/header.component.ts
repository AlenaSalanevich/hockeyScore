import { Component, OnInit,  OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Login } from '../model/user/login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeaderComponent implements OnInit, OnDestroy {

  public isLogin: boolean;
  public currentUser: Login;

  constructor(private readonly authService: AuthService) {
    this.authService.isLogin.subscribe(result => this.isLogin = result);
    this.authService.getCurrentUser().subscribe(result => this.currentUser = result);
  }

  ngOnInit() {
    this.isLogin = false;
    this.authService.isLogin.subscribe(result => this.isLogin = result);
  }

  ngOnDestroy(): void {
    this.authService.isLogin.unsubscribe();
    this.authService.getCurrentUser().unsubscribe();
  }

  logout() {
    console.log('log out!');
    this.authService.logout();
  }
}
