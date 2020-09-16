import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { AppShellComponent, AppShellModule } from '@ngx-fire-ui/app-shell';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppShellOptions, appShellRoutes } from '@ngx-fire-ui/app-shell';
import { OrganisationsPageComponent } from './organisations-page/organisations-page.component';
import { shellOptions, URLS } from './appConfig';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganisationsPageComponent,
    HomePageComponent,
    EmployeesPageComponent,
    Component1Component,
  ],
  imports: [
    BrowserModule,
    AppShellModule.forRoot(shellOptions),
    RouterModule.forRoot(
      [
        {
          path: '',
          component: AppShellComponent,
          children: [
            {
              path: URLS.home,
              component: HomePageComponent,
            },
            {
              path: URLS.organisations,
              component: OrganisationsPageComponent,
              children: [
                {
                  path: '',
                  redirectTo: URLS.organisationsFirst,
                  pathMatch: 'full',
                },
                {
                  path: URLS.organisationsFirst,
                  component: Component1Component,
                },
                {
                  path: 'second',
                  component: Component1Component,
                },
              ],
            },
            {
              path: URLS.employees,
              component: EmployeesPageComponent,
            },
            ...appShellRoutes,
          ],
        },
        {
          path: '**',
          redirectTo: 'home',
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
