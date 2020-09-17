import { Component, OnInit, Input } from '@angular/core';
import { Tab } from './tabs.interface';

@Component({
  selector: 'npx-fire-ui-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() tabs: Tab[] = [];

  navLinks: Tab[];

  constructor() {
    this.navLinks = this.tabs;
  }

  ngOnInit(): void {
    this.navLinks = this.tabs;
  }
}
