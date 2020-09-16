import { Component, OnInit, Input } from '@angular/core';

export interface Tab {
  label: string;
  route: string;
}

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
