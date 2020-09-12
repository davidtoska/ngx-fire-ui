import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogClose,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'npx-fire-ui-new-context-modal',
  templateUrl: './new-context-modal.component.html',
  styleUrls: ['./new-context-modal.component.scss'],
})
export class NewContextModalComponent implements OnInit {
  hideModal = false;
  handset$ = true;
  constructor(
    public dialogRef: MatDialogRef<NewContextModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  closeDialogHandler() {
    this.hideModal = true;
    console.log(this.handset$);
    window.setTimeout(() => this.dialogClose(), 200);
  }

  dialogClose() {
    this.dialogRef.close();
    this.hideModal = false;
    console.log(this.handset$);
  }
  ngOnInit(): void {}
}
