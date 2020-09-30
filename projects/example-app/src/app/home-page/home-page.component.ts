import { Component, Injector, OnInit } from '@angular/core';
import { StoreSync } from '@ngx-fire-ui/core';
import { BasePage } from '@ngx-fire-ui/app-shell';

@Component({
  selector: 'ngx-fire-ui-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent extends BasePage implements OnInit {
  pageId = 'Home';
  ui = new StoreSync({});

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    super.ngOnDestroy();
  }
}
