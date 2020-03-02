import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { JsonPipe } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from './modal/modal.component';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class Errorhandler {
    constructor(private readonly router: Router,
        private readonly errorComponent: ErrorComponent,
        private readonly jsPipe: JsonPipe, public dialog: MatDialog) { }
        public handleError(e: HttpErrorResponse):void {
        console.log(this.jsPipe.transform(e));
        const dialogRef = this.dialog.open(ModalComponent, {
            width: '250px',
            data: {errorMessage: e.message, errorCode: e.status}
          });
       }
}
