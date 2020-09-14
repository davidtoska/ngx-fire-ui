import {
  ChangeDetectorRef,
  Component,

  Directive,

  OnInit
} from '@angular/core';
import { StoreSync } from '@ngx-fire-ui/core';

// @Directive()

export class BasePage implements OnInit {
  ui = new StoreSync({
    sideNavCollapsed: false,
    isScrolled: false,
    isHandset: false,
  });

  constructor(
    // private layout: LayoutService,
    // private scrollService: ScrollService,
    private ref: ChangeDetectorRef,
    // private readonly authService: AuthService,
  ) {

  }

  runOnInit(){
    console.log("[BASE-PAGE] runOnInit...")
  }

  ngOnInit(): void {
  }
}
