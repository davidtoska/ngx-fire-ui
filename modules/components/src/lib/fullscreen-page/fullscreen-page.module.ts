import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FullscreenPageComponent } from './fullscreen-page.component';

@NgModule({
  declarations: [FullscreenPageComponent],
  exports: [FullscreenPageComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule],
})
export class FullscreenPageModule {}
