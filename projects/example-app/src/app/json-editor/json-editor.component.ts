import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '@ngx-fire-ui/app-shell';
import { StoreSync } from '@ngx-fire-ui/core';

@Component({
  selector: 'ngx-fire-ui-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss'],
})
export class JsonEditorComponent extends BasePage implements OnInit {
  pageId = 'json-editor';
  ui = new StoreSync({});
  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {}
}
