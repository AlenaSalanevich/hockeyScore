import { Iuser } from './iuser';
import { Iplayer } from '../player/iplayer';
import { Ilogin } from './ilogin';
/**
 * User entity class implements @Iuser interface with constructor, getters and setters
 */
export class User implements Iuser, Ilogin {
    password: string;
    login: string;
    id: number; last_name: string;
    first_name: string;
    email: string;
}
