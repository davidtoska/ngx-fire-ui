import { InjectionToken } from '@angular/core';

export interface ShellOptions {
  menuItems: MenuItem[];
  iconUrl?: string;
}

export class MenuItem {
  route!: string;
  label!: string;
  icon?: string;
  // customIcons = false;
}

export const MENU_ITEMS = new InjectionToken<MenuItem>('MENU_ITEMS');
