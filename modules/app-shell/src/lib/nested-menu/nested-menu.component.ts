import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'npx-fire-ui-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss'],
})
export class NestedMenuComponent implements OnInit {
  appConfig = {
    contextName: 'Firestarter',
  };

  boardConfig = {
    levelOneSelectedName: 'boards',
    levelOneSelectedIndex: 0,
    levelTwoSelectedName: '40sdf09ie',
    levelTwoSelectedIndex: 1,
    levelOneIcon: 'home',
    levelTwoIcon: 'home',
    levelThreeIcon: 'home',
    levelOneButton: 'Add Collection',
    levelTwoButton: 'Add Document',
    levelThreeButton: 'Add Field',
  };

  levelOneItems = [
    {
      name: 'boards',
      selected: true,
    },
    {
      name: 'customers',
      selected: false,
    },
  ];

  levelTwoItems = [
    {
      name: '7jsd8k10',
      selected: false,
    },
    {
      name: '40sdf09ie',
      selected: true,
    },
  ];

  levelThreeItem = [{ key: 'key', value: 'value', isArray: false }];

  constructor() {}

  levelOneSelect(i: number) {
    this.levelOneItems[this.boardConfig.levelOneSelectedIndex].selected = false;
    this.levelOneItems[i].selected = true;
    this.boardConfig.levelOneSelectedIndex = i;
    this.boardConfig.levelOneSelectedName = this.levelOneItems[i].name;
  }

  levelTwoSelect(i: number) {
    this.levelTwoItems[this.boardConfig.levelTwoSelectedIndex].selected = false;
    this.levelTwoItems[i].selected = true;
    this.boardConfig.levelTwoSelectedIndex = i;
    this.boardConfig.levelTwoSelectedName = this.levelTwoItems[i].name;
  }
  ngOnInit(): void {}
}
