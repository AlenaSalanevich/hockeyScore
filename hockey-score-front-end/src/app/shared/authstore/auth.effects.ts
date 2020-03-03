import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthActionTypes, LogIn, LogInSuccess, LoginFailure } from './actions/auth.actions';
import { User } from '../model/user/user';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { of } from "rxjs";
import { tap, catchError, switchMap, map } from 'rxjs/operators';

@Injectable()
export class AuthEffects {

    constructor(
        private actions: Actions,
        private authService: AuthService,
        private router: Router,
    ) { }

    @Effect()
    LogIn: Observable<any> = this.actions.pipe(ofType<LogIn>(AuthActionTypes.LOGIN),
        switchMap((action: LogIn) =>
            this.authService.login(action.payload).pipe(map((data: User) => {
                return new LogInSuccess(data);
            }),
                catchError((error) => {
                    console.log(error);
                    return of(new LoginFailure({ error: error }));
                }))));


    @Effect({ dispatch: false })
    LogInSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS),
        tap((user) => {
            localStorage.setItem('token', user.payload.token);
            this.router.navigateByUrl('/');
        })
    );
    @Effect({ dispatch: false })
    LogInFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_FAILURE)
    );

    @Effect({ dispatch: false })
    LogOut: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGOUT),
        tap(() => {
            localStorage.removeItem('token');
            this.router.navigateByUrl('/');
        })
    );
}