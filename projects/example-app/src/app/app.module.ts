import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import {
  AppShellComponent,
  AppShellModule,
  DynamicFormModule,
} from '@ngx-fire-ui/app-shell';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrganisationsPageComponent } from './organisations-page/organisations-page.component';
import { shellOptions, URLS } from './appConfig';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';

import { OrderFormComponent } from './order-form/order-form.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import {
  FullscreenPageModule,
  NestedMenuModule,
} from '@ngx-fire-ui/components';
import { FullscreenLandingpageComponent } from './fullscreen-landingpage/fullscreen-landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganisationsPageComponent,
    HomePageComponent,
    EmployeesPageComponent,
    OrderFormComponent,
    JsonEditorComponent,
    FullscreenLandingpageComponent,
  ],
  imports: [
    BrowserModule,
    AppShellModule.forRoot(shellOptions),
    FullscreenPageModule,
    NestedMenuModule,
    DynamicFormModule,
    MatGridListModule,
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
            },
            {
              path: URLS.dynamicForms,
              component: OrderFormComponent,
            },
            {
              path: URLS.employees,
              component: EmployeesPageComponent,
            },
            {
              path: URLS.jsonEditor,
              component: JsonEditorComponent,
            },
          ],
        },
        {
          path: URLS.fullScreenPage,
          component: FullscreenLandingpageComponent,
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
