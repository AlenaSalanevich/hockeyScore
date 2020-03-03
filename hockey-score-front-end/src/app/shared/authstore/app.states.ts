import * as auth from './reducers/auth.reducer'


export interface AppState {
    authState: auth.AuthState;

}

export const reducers = {
    auth: auth.authReducer
};