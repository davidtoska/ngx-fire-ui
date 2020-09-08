import { InjectionToken } from '@angular/core';

export interface AppShellOptions {
  menuItems: MenuItem[];
  iconUrl?: string;
}

export class MenuItem {
  route!: string;
  label!: string;
  icon?: string;
  // customIcons = false;
}

export const APP_SHELL_OPTIONS = new InjectionToken<MenuItem>(
  '@ngx-app-shell-options__TOKEN'
);
