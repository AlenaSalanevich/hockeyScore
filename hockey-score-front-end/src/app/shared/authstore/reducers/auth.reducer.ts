import { User } from '../../model/user/user';

import { createReducer } from '@ngrx/store';

import { on } from 'cluster';

import { LOGIN, LOGOUT, LogOut } from '../actions/auth.actions';

export interface AuthState {
    // boolean if user is authenticated
    authenticated: boolean;

    // error message
    error?: string;


    // the authenticated user
    user?: User;

    errorMessage: string | null;
}

export const initialState: AuthState = {
    authenticated: false,
    error: '',
    user: new User(),
    errorMessage: null
};

const _authReducer = createReducer(initialState,
    on(LOGIN, state => state),
    on(LogOut, state => initialState),
);

export function authReducer(state, action) {
    return _authReducer(state, action);
}

