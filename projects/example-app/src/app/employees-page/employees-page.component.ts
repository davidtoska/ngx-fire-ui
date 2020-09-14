import { Component, Injector, OnInit } from '@angular/core';
import { StoreSync } from '@ngx-fire-ui/core';
import { BasePage } from 'modules/app-shell/src/lib/base-page.component';

@Component({
  selector: 'npx-fire-ui-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
})
export class EmployeesPageComponent extends BasePage implements OnInit {
  pageId = 'Employees';
  ui = new StoreSync({ isselected: false });

  constructor(protected readonly injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('[Employees Page]' + this.ui.state.isselected);
  }
}
