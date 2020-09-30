import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullscreenModalComponent } from './fullscreen-modal.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [FullscreenModalComponent],
  imports: [CommonModule, OverlayModule],
  exports: [FullscreenModalComponent],
  entryComponents: [FullscreenModalComponent],
})
export class FullscreenModalModule {}
