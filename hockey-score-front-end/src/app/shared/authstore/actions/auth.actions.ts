import { createAction, props } from '@ngrx/store'
import { Login } from '../../model/user/login';

export const LOGIN_SUCCESS = createAction('[Auth API] Login Success');

export const LOGIN_ERROR = createAction('[Auth API] Login Error');

export const LOGOUT = createAction('[Auth API] Logout');

export const LOGIN = createAction(
    '[Login Page] Login',
    props<{ login: Login }>()
);