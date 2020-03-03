import { Action } from '@ngrx/store'
import { Login } from '../../model/user/login';
import { User } from '../../model/user/user';

export class LogIn implements Action {
    readonly type = AuthActionTypes.LOGIN;
    constructor(public payload: Login) { }
}

export class LoginFailure
    implements Action {
    readonly type = AuthActionTypes.LOGIN_FAILURE;
    constructor(public payload: any) { }
}

export class LogInSuccess implements Action {
    readonly type = AuthActionTypes.LOGIN_SUCCESS;
    constructor(public payload: User) { }
}
export class LogOut implements Action {
    readonly type = AuthActionTypes.LOGOUT;
    constructor() { }
}



export type All = | LogIn | LogOut | LogInSuccess | LoginFailure;

export enum AuthActionTypes {

    LOGIN_SUCCESS = '[Auth API] Login Success',

    LOGIN_FAILURE = '[Auth API] Login Failure',

    LOGOUT = '[Auth API] Logout',

    LOGIN = '[Login Page] Login'

}