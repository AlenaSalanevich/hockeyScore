import { Injectable } from '@angular/core';

import { Actions } from '@ngrx/store-devtools/src/reducer';

import { AuthService } from '../auth.service';

import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  // effects go here

}