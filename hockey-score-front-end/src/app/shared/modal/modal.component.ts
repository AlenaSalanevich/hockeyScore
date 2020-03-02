import { Component, OnInit, Inject } from '@angular/core';
import { ErrorDialog } from '../model/error/error-dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ErrorDialog, private readonly router: Router) { }

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigateByUrl("/home");
  }

  ngOnInit() {
  }

}
