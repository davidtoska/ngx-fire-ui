import { Component, OnInit } from '@angular/core';
import { organisationsTabs } from '../appConfig';

@Component({
  selector: 'npx-fire-ui-organisations-page',
  templateUrl: './organisations-page.component.html',
  styleUrls: ['./organisations-page.component.scss'],
})
export class OrganisationsPageComponent implements OnInit {
  initialized = true;

  navLinks = organisationsTabs;

  constructor() {}

  ngOnInit(): void {}
}
