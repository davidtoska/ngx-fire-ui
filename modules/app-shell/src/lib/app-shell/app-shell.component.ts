import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  Inject,
  Injector,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
// import { NewContextModalComponent } from '../new-context-modal/new-context-modal.component';
import { AuthService } from '../services/auth.service';
import { LayoutService } from '../services/layout.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BasePage } from '../base-page.component';

// interface UiState {
//   sideNavCollapsed: boolean;
//   isScrolled: boolean;
//   isHandset: boolean;
// }

@Component({
  selector: 'ngx-fire-ui-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppShellComponent implements OnInit {
  currentPageId = '';
  ui = new StoreSync({
    sideNavCollapsed: false,
    isScrolled: false,
    isHandset: false,
  });

  isLoggedIn = false;
  options: AppShellOptions = defaulOptions;
  menuItems: MenuItem[] = [];

  constructor(
    public dialog: MatDialog,
    private readonly route: ActivatedRoute,
    private layout: LayoutService,
    private scrollService: ScrollService,
    private ref: ChangeDetectorRef,
    private readonly authService: AuthService,
    @Inject(APP_SHELL_OPTIONS) private appOptions: AppShellOptions
  ) {
    // this.route.data.subscribe((d) => console.log(d));
    this.menuItems = [...this.appOptions.menuItems];
    this.layout.isHandset$.subscribe((isHandset) => {
      const a = isHandset;

      this.ui.setState({ isHandset });
    });

    this.authService.isLoggedId$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });

    this.options = { ...this.appOptions };
  }

  ngOnInit(): void {
    this.scrollService.state$.subscribe((state) => {
      this.ui.setState({ isScrolled: state.isScrolled });
      this.ref.detectChanges();
    });
  }
  openDialog() {
    // const dialogRef = this.dialog.open(NewContextModalComponent, {
    //   panelClass: ['new-context-modal'],
    //   disableClose: true,
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  onLogout() {
    this.authService.logOut();
  }

  onLogIn() {
    this.authService.logIn();
  }

  sideNavToggle() {
    const sideNavCollapsed = !this.ui.state.sideNavCollapsed;
    this.ui.setState({ sideNavCollapsed });
  }

  routerOutletsEvents(ev: BasePage) {
    // console.log(ev);
    if (!ev.pageId) {
      console.error('Every page needs to extend base-page');
    }

    if (!ev.__is__initialized) {
      console.log(ev.__is__initialized);
      // console.error('page needs to be initialized: ' + ev.__is__initialized);
    }

    this.currentPageId = ev.pageId ?? 'Set pageId';
  }
}
