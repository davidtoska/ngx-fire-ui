import {
  ChangeDetectorRef,
  Component,
  Directive,
  Injector,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { StoreSync, SubSink } from '@ngx-fire-ui/core';
import { AuthService } from './services/auth.service';
import { LayoutService } from './services/layout.service';

type UiState = { [key: string]: boolean | string | number };

@Directive()
export abstract class BasePage implements OnInit, OnDestroy {
  abstract pageId: string;
  public abstract readonly ui: StoreSync<UiState>;
  public readonly layout = new StoreSync({ isHandset: false });
  protected authService: AuthService;
  private layoutService: LayoutService;

  protected readonly subs = new SubSink();

  constructor(
    protected readonly injector: Injector // private scrollService: ScrollService, // private ref: ChangeDetectorRef, // private readonly authService: AuthService,
  ) {
    // this.uiBase = new StoreSync(uiState)
    // this.uiBase = new StoreSync(uiState)
    this.authService = this.injector.get(AuthService);
    this.layoutService = this.injector.get(LayoutService);
  }

  runOnInit() {
    // this.uiBase = new StoreSync(this.initialUiState)
    console.log('[BASE-PAGE] runOnInit...');
    this.subs.add(
      this.layoutService.isHandset$.subscribe((isHandset) => {
        this.layout.setState({ isHandset });
      })
    );
  }

  ngOnInit(): void {
    console.log('[BASE-PAGE] OnInit...');
    this.runOnInit();
  }

  ngOnDestroy(): void {
    console.log(this.TAG + ' On Destroy.');
  }

  getPageid() {
    return this.pageId;
  }

  get TAG() {
    return `[${this.pageId}]`;
  }
}
