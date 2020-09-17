// import { AppShellOptions } from 'modules/app-shell/src/lib/app-shell/shell-options';
import { OrganisationsPageComponent } from './organisations-page/organisations-page.component';
import { AppShellOptions } from '@ngx-fire-ui/app-shell';
import { Tab } from '@ngx-fire-ui/app-shell';

export const URLS = {
  home: 'home',
  organisations: 'organisations',
  employees: 'employees',
  organisationsFirst: 'first',
};

const organisasjoner = {
  route: URLS.organisations,
  label: 'Organisasjoner',
  icon: 'account_balance',
};
const ansatte = {
  route: URLS.employees,
  label: 'Ansatte',
  icon: 'people',
};

export const shellOptions: AppShellOptions = {
  wheelMenu: true,
  contextMenu: true,
  homeUrl: URLS.home,
  iconUrl: 'assets/tvicon.svg',
  menuItems: [organisasjoner, ansatte],
};
