import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean;

  constructor() { }

  ngOnInit() {
    this.isLogin = false;
  }

  onLoginClicked(isLogin: boolean) {
    console.log('header component onLoginClicked ' + isLogin);
    this.isLogin = isLogin;
  }
  /**
   * handleClick
   * 
   */
  logout() {
    console.log('log out!');
    this.isLogin = false;
  }
}
