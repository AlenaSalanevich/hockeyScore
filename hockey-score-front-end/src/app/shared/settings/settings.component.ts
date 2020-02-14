import { Component, OnInit, OnDestroy } from '@angular/core';
import { Login } from '../model/user/login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../model/user/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {
   
  public currentUser: User;
  private currentUserSubscription: Subscription;
  constructor(private readonly authService: AuthService, private readonly router: Router) { }
  
  ngOnInit(
  ) {
    this.currentUserSubscription = this.authService.currentUser.subscribe(res => this.currentUser = res);
  }

  ngOnDestroy(): void {
  this.currentUserSubscription.unsubscribe();
  }

  redirectToHome() {
    this.router.navigateByUrl('/');
  }
}
