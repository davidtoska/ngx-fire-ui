import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { AppShellModule } from '@ngx-fire-ui/app-shell';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppShellOptions, appShellRoutes } from '@ngx-fire-ui/app-shell';
import { OrganisationsPageComponent } from './organisations-page/organisations-page.component';
import { shellOptions } from './appConfig';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [AppComponent, OrganisationsPageComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppShellModule.forRoot(shellOptions),
    RouterModule.forRoot(
      [
        {
          path: 'home',
          component: HomePageComponent,
        },
        {
          path: 'organisations',
          component: OrganisationsPageComponent,
          outlet: 'fullscreen',
        },
        ...appShellRoutes,
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
