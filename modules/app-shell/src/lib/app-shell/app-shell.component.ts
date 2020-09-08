import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ScrollService } from '../services/scroll.service';
import { AppShellOptions, APP_SHELL_OPTIONS, MenuItem } from './shell-options';

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
    private scrollService: ScrollService,
    @Inject(APP_SHELL_OPTIONS) private providedMenuItems: AppShellOptions
  ) {
    this.menuItems = [...this.providedMenuItems.menuItems];
    this.scrollService.scrollY$.subscribe((e) => {
      console.log(e);
    });
  }

  ngOnInit(): void {
    this.scrollService.scrollY$.subscribe((n) => console.warn(n));
    this.scrollService.isOnTop$.subscribe((n) => console.warn(n));
    this.scrollService.isScrolled$.subscribe((n) => console.warn(n));
  }
  sideNavToggle() {
    this.sideNavCollapsed = !this.sideNavCollapsed;
  }
}
