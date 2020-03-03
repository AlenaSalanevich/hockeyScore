import { Component, OnInit, OnDestroy } from '@angular/core';
import { Login } from '../model/user/login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../model/user/user';
import { Store } from '@ngrx/store';
import { AppState } from '../authstore/app.states';
import { selectAuthState } from '../authstore/reducers/auth.reducer';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public currentUser: User;
  public isLogged: boolean;

  constructor(private store: Store<AppState>, private readonly router: Router) { }

  ngOnInit(
  ) {
    this.store.select(selectAuthState).subscribe(res => this.currentUser = res.user);
    this.store.select(selectAuthState).subscribe(res => this.isLogged = res.authenticated);
  }

  redirectToHome() {
    this.router.navigateByUrl('/');
  }
}
