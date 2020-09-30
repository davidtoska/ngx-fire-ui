import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '@ngx-fire-ui/app-shell';
import { StoreSync } from '@ngx-fire-ui/core';

@Component({
  selector: 'ngx-fire-ui-fullscreen-landingpage',
  templateUrl: './fullscreen-landingpage.component.html',
  styleUrls: ['./fullscreen-landingpage.component.scss'],
})
export class FullscreenLandingpageComponent extends BasePage implements OnInit {
  pageId = 'Fullscreen landing page';
  ui = new StoreSync({});

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {}
}
