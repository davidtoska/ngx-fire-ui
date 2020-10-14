import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FullscreenPageComponent } from './fullscreen-page.component';


@NgModule({
  declarations: [FullscreenPageComponent],
  exports: [FullscreenPageComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule,MatButtonModule],
})
export class FullscreenPageModule {}
