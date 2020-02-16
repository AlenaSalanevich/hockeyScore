import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { JsonPipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class Errorhandler {

    constructor(private readonly router: Router,
        private readonly errorComponent: ErrorComponent,
        private readonly jsPipe: JsonPipe) { }
    public handleError(e: any) {
        this.errorComponent.error = this.jsPipe.transform(e);
        this.router.navigateByUrl("error");
    }
}
