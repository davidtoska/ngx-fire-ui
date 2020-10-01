import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppShellOptions, APP_SHELL_OPTIONS } from '../app-shell/shell-options';
import { BasePage } from '../base-page.component';
import {
  CONTEXT_PROVIDER,
  ContextProvider,
} from '../services/context-provider';

@Component({
  selector: 'ngx-fire-ui-context-menu-page',
  templateUrl: './context-menu-page.component.html',
  styleUrls: ['./context-menu-page.component.scss'],
})
export class ContextMenuPageComponent implements OnInit {
  pageId = 'Top context';
  contextName: string;
  handset$ = false;

  constructor(
    @Inject(CONTEXT_PROVIDER) private contextProvider: ContextProvider
  ) {
    console.log(contextProvider);
    this.contextName = contextProvider.name;
  }

  get list$() {
    return this.contextProvider.list$;
  }

  addContext() {
    this.contextProvider.create();
  }
  ngOnInit(): void {}
}
