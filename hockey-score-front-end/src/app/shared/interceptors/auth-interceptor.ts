import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private readonly authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token: string;
        this.authService.currentUser.subscribe(res => {
            if (res === null) {
                token = '';
            }
            else {
                token = res.token.token;
            }
        })
        const authReq = req.clone(
            {
                headers: req.headers.set('Authorization', token)
            }
        )
        return next.handle(authReq);
    }
}
