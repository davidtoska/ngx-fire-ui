import {
  ChangeDetectorRef,
  Component,
  Directive,
  Injector,
  OnInit,
} from '@angular/core';
import { StoreSync } from '@ngx-fire-ui/core';
import { AuthService } from './services/auth.service';

type UiState = { [key: string]: boolean | string | number };

@Directive()
export abstract class BasePage implements OnInit {
  abstract pageId: string;
  // protected abstract readonly initialUiState: {[key: string]: boolean | string | number}
  // protected initialUiState: T;
  protected abstract ui: StoreSync<UiState>;
  protected authSer: AuthService;

  constructor(
    protected readonly injector: Injector // private scrollService: ScrollService, // private ref: ChangeDetectorRef, // private readonly authService: AuthService,
  ) {
    // this.uiBase = new StoreSync(uiState)
    // this.uiBase = new StoreSync(uiState)
    this.authSer = this.injector.get(AuthService);
  }

  runOnInit() {
    // this.uiBase = new StoreSync(this.initialUiState)
    console.log('[BASE-PAGE] runOnInit...');
    console.log(this.injector);
    console.log(this.authSer);
  }

  ngOnInit(): void {
    console.log('[BASE-PAGE] OnInit...');
  }

  getPageid() {
    return this.pageId;
  }
}
