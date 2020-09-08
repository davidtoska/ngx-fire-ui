import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { AppShellModule } from '@ngx-fire-ui/app-shell';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppShellOptions } from '@ngx-fire-ui/app-shell';
import { OrganisationsPageComponent } from './organisations-page/organisations-page.component';
import { shellOptions } from './appConfig';

@NgModule({
  declarations: [AppComponent, OrganisationsPageComponent],
  imports: [
    BrowserModule,
    AppShellModule.forRoot(shellOptions),
    RouterModule.forRoot(
      [
        {
          path: 'organisations',
          component: OrganisationsPageComponent,
        },
        {
          path: '**',
          component: OrganisationsPageComponent,
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
