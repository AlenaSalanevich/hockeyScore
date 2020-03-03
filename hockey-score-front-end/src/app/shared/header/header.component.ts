import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../model/user/user';
import { Store } from '@ngrx/store';
import { AppState } from '../authstore/app.states';
import { LogOut } from '../authstore/actions/auth.actions';
import { selectAuthState } from '../authstore/reducers/auth.reducer';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeaderComponent implements OnInit {

  public isLogin: Boolean;
  public currentUser: User;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(selectAuthState).subscribe(res => this.currentUser = res.user);
    this.store.select(selectAuthState).subscribe(res => this.isLogin = res.authenticated);
  }

  logout() {
    console.log('log out!');
    this.store.dispatch(new LogOut());
  }
}
