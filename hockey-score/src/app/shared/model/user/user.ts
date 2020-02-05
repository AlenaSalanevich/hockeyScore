import { Iuser } from './iuser';
import { Iplayer } from '../player/iplayer';
import { Ilogin } from './ilogin';
import { BaseEntity } from '../base-entity';
/**
 * User entity class implements @Iuser interface with constructor, getters and setters
 */
export class User extends BaseEntity implements Iuser, Ilogin {
    password: string;
    login: string;
    last_name: string;
    first_name: string;
    email: string;
}
