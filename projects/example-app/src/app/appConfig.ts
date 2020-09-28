// import { AppShellOptions } from 'modules/app-shell/src/lib/app-shell/shell-options';
import { OrganisationsPageComponent } from './organisations-page/organisations-page.component';
import { Tab } from '@ngx-fire-ui/app-shell';
import { AppShellOptions, MenuItem } from '@ngx-fire-ui/app-shell';

export const URLS = {
  home: 'home',
  organisations: 'organisations',
  employees: 'employees',
  organisationsFirst: 'first',
  orders: 'orders',
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

const orders: MenuItem = {
  route: URLS.orders,
  label: 'Orders',
  icon: 'shopping_cart',
};

export const shellOptions: AppShellOptions = {
  wheelMenu: true,
  contextMenu: true,
  homeUrl: URLS.home,
  iconUrl: 'assets/tvicon.svg',
  menuItems: [organisasjoner, ansatte, orders],
};
