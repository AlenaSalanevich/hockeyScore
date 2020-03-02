import { Injectable, ErrorHandler } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Injectable({
    providedIn: 'root'
})
export class AppErrorHandler implements ErrorHandler {

    constructor(private readonly jsPipe: JsonPipe, public dialog: MatDialog) { }
    public handleError(e: any): void {
        console.log(this.jsPipe.transform(e));

        const dialogRef = this.dialog.open(ModalComponent, {
            width: '450px',
            data: { errorMessage: this.jsPipe.transform(e), errorCode: e.status }
        });
    }
}
