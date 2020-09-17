import { Component, OnInit } from '@angular/core';
import { Tab } from '@ngx-fire-ui/app-shell';

@Component({
  selector: 'npx-fire-ui-organisations-page',
  templateUrl: './organisations-page.component.html',
  styleUrls: ['./organisations-page.component.scss'],
})
export class OrganisationsPageComponent implements OnInit {
  initialized = true;

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

  constructor() {}

  ngOnInit(): void {}
}
