import { createReducer, on } from '@ngrx/store';
import { login, LOGOUT } from './auth.actions';
import { User } from '../model/user/user';


export interface AuthState {
    // boolean if user is authenticated
    authenticated: boolean;

    // error message
    error?: string;

    // the authenticated user
    user?: User;
}
export const initialState: AuthState = {
    authenticated: false,
    error: '',
    user: new User()
};

const _authReducer = createReducer(initialState,
    on(login, state => state),
    on(LOGOUT, state => initialState),
);

export function authReducer(state, action) {
    return _authReducer(state, action);
}