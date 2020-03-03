import { User } from '../../model/user/user';

import { All, AuthActionTypes } from '../actions/auth.actions';
import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app.states';

export interface AuthState {

    authenticated: boolean;
    error?: string | null;
    user?: User;
}

export const initialState: AuthState = {
    authenticated: false,
    error: null,
    user: new User(),
};

export function authReducer(state = initialState, action: All): AuthState {
    switch (action.type) {
        case AuthActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                authenticated: action.payload.isAuth,
                user: {
                    id: action.payload.id,
                    password: action.payload.password,
                    login: action.payload.login,
                    name: action.payload.name,
                    email: action.payload.email,
                    isAuth: action.payload.isAuth,
                    token: {
                        token: action.payload.token.token,
                        expirationDate: action.payload.token.expirationDate
                    }
                },
                error: null
            };
        }
        case AuthActionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                error: 'Incorrect login and/or password.'
            };
        }
        case AuthActionTypes.LOGOUT: {
            return {
                ...state,
                authenticated: false,
                user: new User(),
                error: null
            };
        }
        default: {
            return state;
        }
    }
}

export const selectAuthState = createFeatureSelector<AuthState>('authState');

