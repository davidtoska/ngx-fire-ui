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
import { LoginComponent } from './login/login.component';
import { FullscreenPageComponent } from './fullscreen-page/fullscreen-page.component';
import { ContextMenuPageComponent } from './context-menu-page/context-menu-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewContextModalComponent } from './new-context-modal/new-context-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/**
 * Maybe we can export all routs to parent-app, and not use RouterModule.forchild() in lib.
 */
export const appShellRoutes: Route[] = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

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
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    AppShellComponent,
    LoginComponent,
    FullscreenPageComponent,
    ContextMenuPageComponent,
    LoginPageComponent,
    NewContextModalComponent,
  ],
  exports: [AppShellComponent, LoginComponent],
  entryComponents: [NewContextModalComponent],
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
