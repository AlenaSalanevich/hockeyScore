/**
 * User entity interface.
 */
export interface Iuser {
    name: string;
    email: string;
    isAuth: boolean;
    token: {
        token: string;
        expirationDate: Date;
    }
}
