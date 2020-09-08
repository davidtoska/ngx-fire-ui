import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { AppShellModule } from '@ngx-fire-ui/app-shell';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellOptions } from 'modules/app-shell/src/lib/app-shell/shell-options';

const organisasjoner = {
  route: 'organisations',
  label: 'Organisasjoner',
  icon: 'account_balance',
};
const ansatte = {
  route: 'employees',
  label: 'Ansatte',
  icon: 'people',
};

const shellOptions: ShellOptions = {
  menuItems: [
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
    organisasjoner,
    ansatte,
  ],
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppShellModule.forRoot(shellOptions),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
