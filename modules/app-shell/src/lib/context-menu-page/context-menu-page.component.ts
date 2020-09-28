import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-fire-ui-context-menu-page',
  templateUrl: './context-menu-page.component.html',
  styleUrls: ['./context-menu-page.component.scss'],
})
export class ContextMenuPageComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
