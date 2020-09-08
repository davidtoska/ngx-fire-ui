import { Component, AfterViewInit, Inject, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuItem, APP_SHELL_OPTIONS, AppShellOptions } from './shell-options';

@Component({
  selector: 'npx-fire-ui-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
})
export class AppShellComponent implements OnInit {
  sideNavCollapsed = false;
  menuItems: MenuItem[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  isScrolled = false;
  constructor(
    private breakpointObserver: BreakpointObserver,
    @Inject(APP_SHELL_OPTIONS) private providedMenuItems: AppShellOptions
  ) {
    console.log(this.providedMenuItems);

    this.menuItems = [...this.providedMenuItems.menuItems];
  }

  ngOnInit(): void {}
  sideNavToggle() {
    this.sideNavCollapsed = !this.sideNavCollapsed;
  }
}
