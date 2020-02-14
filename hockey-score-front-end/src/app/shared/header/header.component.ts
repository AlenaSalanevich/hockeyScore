import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { User } from '../model/user/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeaderComponent implements OnInit, OnDestroy {

  public isLogin: Boolean;
  public currentUser: User;
  public isLoginSubscription: Subscription;
  private currentUserSubscription: Subscription;

  constructor(private readonly authService: AuthService) {
  }

  ngOnInit() {
    this.currentUserSubscription = this.authService.currentUser.subscribe(res => this.currentUser = res);
    this.isLoginSubscription = this.authService.isLogin.subscribe(res => this.isLogin = res)
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
    this.isLoginSubscription.unsubscribe();
  }

  logout() {
    console.log('log out!');
    this.isLogin = false;
    this.authService.logout();
  }
}
