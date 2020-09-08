import { InjectionToken, Type } from '@angular/core';

export const defaulOptions: AppShellOptions = {
  menuItems: [],
  iconUrl: '',
  homeUrl: 'home',
  wheelMenu: true,
  contextMenu: true,
};
export interface AppShellOptions {
  menuItems: MenuItem[];
  iconUrl: string;
  homeUrl: string;
  wheelMenu: boolean;
  contextMenu: boolean;
  contextUrl?: string;
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
