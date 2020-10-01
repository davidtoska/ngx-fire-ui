import { Component, Inject, OnInit } from '@angular/core';
import { AppShellOptions, APP_SHELL_OPTIONS } from '../app-shell/shell-options';
import { BasePage } from '../base-page.component';
import { CONTEXT_PROVIDER } from '../services/private-tokens';

@Component({
  selector: 'ngx-fire-ui-context-menu-page',
  templateUrl: './context-menu-page.component.html',
  styleUrls: ['./context-menu-page.component.scss'],
})
export class ContextMenuPageComponent implements OnInit {
  pageId = 'Top context';
  projects = [
    {
      name: 'Lyngbøtunet Sykehjem',
      description: 'Aldershjem og sykehjem på laksevåg',
    },
    {
      name: 'Lyngbøtunet Sykehjem',
    },
    {
      name: 'Lyngbøtunet Sykehjem',
    },
    {
      name: 'Lyngbøtunet Sykehjem',
      description: 'Aldershjem og sykehjem på laksevåg',
    },
    {
      name: 'Lyngbøtunet Sykehjem',
      description: 'Aldershjem og sykehjem på laksevåg',
    },
  ];
  handset$ = false;
  constructor(
    @Inject(APP_SHELL_OPTIONS) options: AppShellOptions,
    @Inject(CONTEXT_PROVIDER) contextProvider: any
  ) {
    console.log(options);
    console.log(contextProvider);
  }

  ngOnInit(): void {}
}
