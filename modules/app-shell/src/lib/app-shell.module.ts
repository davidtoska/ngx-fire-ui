import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';
// import { LayoutModule } from '@angular/cdk/layout';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import { MatMenuModule } from '@angular/material/menu';

export const appShellRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // LayoutModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,
    // MatMenuModule,
  ],
  declarations: [AppShellComponent],
  exports: [AppShellComponent],
})
export class AppShellModule {}

// import { MENU_ITEMS, ShellOptions } from './shell/shell-options';

// @NgModule({
//   imports: [
//     CommonModule,

//   ],
//   declarations: [ShellComponent],
//   exports: [ShellComponent],
// })
// export class FeatureShellModule {
//   static forRoot(options: ShellOptions): ModuleWithProviders {
//     return {
//       ngModule: FeatureShellModule,
//       providers: [{ provide: MENU_ITEMS, useValue: options.menuItems }],
//     };
//   }
// }
