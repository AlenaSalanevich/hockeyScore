import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store'
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthActionTypes, LogIn, LogInSuccess, LoginFailure } from './actions/auth.actions';
import { User } from '../model/user/user';

@Injectable()
export class AuthEffects {

    constructor(
        private actions: Actions,
        private authService: AuthService,
        private router: Router,
    ) { }

    @Effect()
    LogIn: Observable<User> = this.actions
        .ofType(AuthActionTypes.LOGIN)
        .map((action: LogIn) => action.payload)
        .switchMap(payload => {
            return this.authService.login(payload)
                .map((user) => {
                    console.log(user);
                    return new LogInSuccess(user);
                })
                .catch((error) => {
                    console.log(error);
                    return Observable.of(new LoginFailure({ error: error }));
                });
        });

}