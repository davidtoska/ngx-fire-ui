import { InjectionToken, Type } from '@angular/core';
import { ContextProvider } from '../services/context-provider';

export const defaulOptions: AppShellOptions = {
  menuItems: [],
  brandIconUrl: '',
  brandName: 'Default brand name',
  homeUrl: 'home',
  wheelMenu: true,
};

export interface AppShellOptions<T = any> {
  readonly menuItems: MenuItem[];
  readonly brandIconUrl: string;
  readonly brandName: string;
  readonly homeUrl: string;
  readonly wheelMenu: boolean;
  readonly contextProvider?: ContextProvider<T>;
}

export class MenuItem {
  route!: string;
  label!: string;
  icon?: string;
}

export const APP_SHELL_OPTIONS = new InjectionToken<MenuItem>(
  '@ngx-app-shell-options__TOKEN'
);
