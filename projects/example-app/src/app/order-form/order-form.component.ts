import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from 'modules/app-shell/src/lib/base-page.component';
import { StoreSync } from '@ngx-fire-ui/core';

@Component({
  selector: 'ngx-fire-ui-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent extends BasePage implements OnInit {
  pageId = 'Place your order';
  ui = new StoreSync({ selected: 'none' });

  constructor(protected readonly injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
