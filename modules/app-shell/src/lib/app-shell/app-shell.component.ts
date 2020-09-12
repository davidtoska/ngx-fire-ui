import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
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
import { NewContextModalComponent } from '../new-context-modal/new-context-modal.component';
import { AuthService } from '../services/auth.service';

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

  isLoggedIn = false;

  options: AppShellOptions = defaulOptions;
  menuItems: MenuItem[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private scrollService: ScrollService,
    private ref: ChangeDetectorRef,
    private readonly authService: AuthService,
    @Inject(APP_SHELL_OPTIONS) private providedMenuItems: AppShellOptions
  ) {
    this.menuItems = [...this.providedMenuItems.menuItems];
    this.ui.state$.subscribe((state) => {
      console.log(state);
    });
    this.isHandset$.subscribe((isHandset) => {
      this.ui.update({ isHandset });
    });
    this.authService.isLoggedId$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      console.log(this.isLoggedIn);
    });
  }

  ngOnInit(): void {
    this.scrollService.state$.subscribe((state) => {
      this.ui.update({ isScrolled: state.isScrolled });
      this.ref.detectChanges();
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(NewContextModalComponent, {
      panelClass: ['new-context-modal'],
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onLogout() {
    this.authService.logOut();
  }

  onLogIn() {
    this.authService.logIn();
  }

  sideNavToggle() {
    const sideNavCollapsed = !this.ui.select('sideNavCollapsed');
    this.ui.update({ sideNavCollapsed });
  }
}
