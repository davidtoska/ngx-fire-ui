import { Overlay } from '@angular/cdk/overlay';
import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'npx-fire-ui-fullscreen-modal',
  templateUrl: './fullscreen-modal.component.html',
  styleUrls: ['./fullscreen-modal.component.css'],
})
export class FullscreenModalComponent implements OnInit {
  constructor(private overlay: Overlay, private injector: Injector) {}

  ngOnInit(): void {}

  // const dialogRef = this.dialog.open(NewContextModalComponent, {
  //   panelClass: ['new-context-modal'],
  //   disableClose: true,
  // });

  // dialogRef.afterClosed().subscribe((result) => {
  //   console.log(`Dialog result: ${result}`);
  // });
}
