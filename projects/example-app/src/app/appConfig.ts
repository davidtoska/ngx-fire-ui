import { AppShellOptions, MenuItem } from '@ngx-fire-ui/app-shell';

export const URLS = {
  home: 'home',
  organisations: 'organisations',
  employees: 'employees',
  dynamicForms: 'dynamic-forms',
  jsonEditor: 'json-editor',
  fullScreenPage: 'fullscreen-page',
  table: 'table-page',
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
  route: URLS.dynamicForms,
  label: 'Dynamic forms',
  icon: 'shopping_cart',
};

const editor: MenuItem = {
  route: URLS.jsonEditor,
  label: 'Json editor',
  icon: 'topic',
};

const fullScreenLandingPage: MenuItem = {
  route: URLS.fullScreenPage,
  label: 'Fullscreen page',
  icon: 'topic',
};

const tablePage: MenuItem = {
  route: URLS.table,
  label: 'Table',
  icon: 'topic',
};
export const shellOptions: AppShellOptions = {
  wheelMenu: true,
  homeUrl: URLS.home,
  brandIconUrl: 'assets/tvicon.svg',
  brandName: 'Example brand',
  menuItems: [
    organisasjoner,
    ansatte,
    orders,
    editor,
    fullScreenLandingPage,
    tablePage,
  ],
};
