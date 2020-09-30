import { InjectionToken, Type } from '@angular/core';

export const defaulOptions: AppShellOptions = {
  menuItems: [],
  brandIconUrl: '',
  brandName: 'Default brand name',
  homeUrl: 'home',
  wheelMenu: true,
  contextMenu: true,
};

export interface AppShellOptions {
  readonly menuItems: MenuItem[];
  readonly brandIconUrl: string;
  readonly brandName: string;
  readonly homeUrl: string;
  readonly wheelMenu: boolean;
  readonly contextMenu: boolean;
  // readonly contextUrl?: string;
}

export class MenuItem {
  route!: string;
  label!: string;
  icon?: string;
}

export const APP_SHELL_OPTIONS = new InjectionToken<MenuItem>(
  '@ngx-app-shell-options__TOKEN'
);
