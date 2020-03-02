import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';
import { User } from '../model/user/user';

export const initialState = new User();

const _authReducer = createReducer(initialState,
    on(login, state => state),
    on(logout, state => new User()),
);

export function authReducer(state, action) {
    return _authReducer(state, action);
}