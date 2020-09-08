import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { StoreSync } from '@ngx-fire-ui/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ScrollService, ScrollState } from '../services/scroll.service';
import {
  AppShellOptions,
  APP_SHELL_OPTIONS,
  defaulOptions,
  MenuItem,
} from './shell-options';

@Component({
  selector: 'npx-fire-ui-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppShellComponent implements OnInit {
  ui = new StoreSync({
    sideNavCollapsed: false,
    isScrolled: false,
    isHandset: false,
  });

  options: AppShellOptions = defaulOptions;
  menuItems: MenuItem[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private scrollService: ScrollService,
    private ref: ChangeDetectorRef,
    @Inject(APP_SHELL_OPTIONS) private providedMenuItems: AppShellOptions
  ) {
    this.menuItems = [...this.providedMenuItems.menuItems];
    this.ui.state$.subscribe((state) => {
      console.log(state);
    });
    this.isHandset$.subscribe((isHandset) => {
      this.ui.update({ isHandset });
    });
  }

  ngOnInit(): void {
    this.scrollService.state$.subscribe((state) => {
      this.ui.update({ isScrolled: state.isScrolled });
      this.ref.detectChanges();
    });
  }

  onLogout() {
    console.log('Logged out');
  }

  sideNavToggle() {
    const sideNavCollapsed = !this.ui.select('sideNavCollapsed');
    this.ui.update({ sideNavCollapsed });
  }
}
