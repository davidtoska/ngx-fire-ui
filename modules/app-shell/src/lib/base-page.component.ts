import {
  ChangeDetectorRef,
  Component,
  Directive,
  Injector,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreSync, SubSink } from '@ngx-fire-ui/core';
import { AuthService } from './services/auth.service';
import { LayoutService } from './services/layout.service';
import { Observable, of, BehaviorSubject } from 'rxjs';

interface InternalPageState {
  isInitialized: boolean;
  isDestroyed: boolean;
}

@Directive()
export abstract class BasePage implements OnInit, OnDestroy {
  private readonly __internal__store$ = new BehaviorSubject<InternalPageState>(
    null
  );
  private readonly __internal__state$ = this.__internal__store$.asObservable();

  public abstract pageId: string;
  public abstract readonly ui: StoreSync;
  public readonly layout = new StoreSync({ isHandset: false });
  public __is__initialized = false;

  protected authService: AuthService;
  private layoutService: LayoutService;
  private route: ActivatedRoute;

  protected readonly subs = new SubSink();

  constructor(
    protected readonly injector: Injector // private scrollService: ScrollService, // private ref: ChangeDetectorRef, // private readonly authService: AuthService,
  ) {
    // this.uiBase = new StoreSync(uiState)
    // this.uiBase = new StoreSync(uiState)
    this.authService = this.injector.get(AuthService);
    this.layoutService = this.injector.get(LayoutService);
    this.route = this.injector.get(ActivatedRoute);
  }

  ngOnInit(): void {
    console.log('[BASE-PAGE] OnInit...');
    this.subs.add(
      this.layoutService.isHandset$.subscribe((isHandset) => {
        this.layout.setState({ isHandset });
      })
    );

    this.subs.add(
      this.route.paramMap.subscribe((p) => {
        // console.log(this.TAG, p);
        // console.log(p);
      })
    );
    this.route.queryParams.subscribe((q) => {
      // console.log(this.TAG, q);
    });

    this.__is__initialized = true;
    this.__internal__store$.next({ isInitialized: true, isDestroyed: false });
  }

  ngOnDestroy(): void {
    console.log(this.TAG + ' On Destroy.');
  }

  getPageLifecycleSubscriptionForAppShell() {
    return this.__internal__state$;
  }

  getPageid() {
    return this.pageId;
  }

  get TAG() {
    return `[${this.pageId}]`;
  }
}
