import { Component, OnInit } from '@angular/core';
import { Login } from '../model/user/login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public currentUser: Login;
  constructor(private readonly authService: AuthService, private readonly router: Router) { }

  ngOnInit(
  ) {
    this.currentUser = this.authService.getUserInfo();
  }

  redirectToHome() {
    this.router.navigateByUrl('/');
  }
}
