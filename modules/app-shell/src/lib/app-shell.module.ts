import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { APP_SHELL_OPTIONS, AppShellOptions } from './app-shell/shell-options';

export const appShellRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    ScrollingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
  ],
  declarations: [AppShellComponent],
  exports: [AppShellComponent],
})
export class AppShellModule {
  static forRoot(
    options: AppShellOptions
  ): ModuleWithProviders<AppShellModule> {
    return {
      ngModule: AppShellModule,
      providers: [{ provide: APP_SHELL_OPTIONS, useValue: options }],
    };
  }
}
