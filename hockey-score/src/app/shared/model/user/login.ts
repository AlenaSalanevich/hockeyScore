import { Ilogin } from './ilogin';

/**
 * User credential interface.
 */
export class Login implements Ilogin {
    password: string;
    login: string;

    constructor(login: string, password:string){
        this.login=login;
        this.password=password;
    }
}