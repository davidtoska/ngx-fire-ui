import { Component, OnInit } from '@angular/core';
import { Tab } from '@ngx-fire-ui/app-shell';
import { Component, Injector, OnInit } from '@angular/core';
import { StoreSync } from '@ngx-fire-ui/core';
import { BasePage } from 'modules/app-shell/src/lib/base-page.component';

@Component({
  selector: 'ngx-fire-ui-organisations-page',
  templateUrl: './organisations-page.component.html',
  styleUrls: ['./organisations-page.component.scss'],
})
export class OrganisationsPageComponent extends BasePage implements OnInit {
  pageId = 'Organisations';
  initialized = true;
  ui = new StoreSync({});

  navLinks: Tab[] = [
    {
      label: 'First',
      route: './first',
    },
    {
      label: 'Second',
      route: './second',
    },
    {
      label: 'Third',
      route: './third',
    },
  ];

  constructor(protected readonly injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
