import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';

export const appShellRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AppShellComponent],
  exports: [AppShellComponent],
})
export class AppShellModule {}
