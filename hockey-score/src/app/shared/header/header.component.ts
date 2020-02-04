import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean;

  constructor(private readonly authService: AuthService) {
    this.isLogin = false;
    this.authService.isLogin.subscribe(result => this.isLogin = result);
  }

  ngOnInit() {
    this.isLogin = false;
  }

  logout() {
    console.log('log out!');
    this.authService.logout();
  }
}
