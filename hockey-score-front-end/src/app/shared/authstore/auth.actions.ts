import {createAction} from '@ngrx/store'
import { Action } from 'rxjs/internal/scheduler/Action'

export const login = createAction('[Login Component] Login');

export const logout = createAction('[Login Component] Logout');