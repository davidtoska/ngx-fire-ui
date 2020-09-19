import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'npx-fire-ui-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss'],
})
export class NestedMenuComponent implements OnInit {
  appConfig = {
    contextName: 'ISPE',
  };

  boardConfig = {
    levelOneSelectedName: 'Depresjon modul A',
    levelOneSelectedIndex: 0,
    levelOneIcon: 'wysiwyg',
    levelOneButton: 'Ny modul',
    levelTwoSelectedName: 'Startmeny',
    levelTwoSelectedIndex: 0,
    levelTwoIcon: 'view_headline',
    levelTwoButton: 'Ny sekvens',
    levelThreeSelectedName: 'as1',
    levelThreeSelectedIndex: 0,
    levelThreeIcon: 'question_answer',
    levelThreeButton: 'Nytt spørsmål',
    levelFourIcon: 'done',
    levelFourButton: 'Nytt felt',
  };

  triggerOrigin: any;
  isOpen = false;
  data!: { key: string; value: string | number };

  levelOneItems = [
    {
      name: 'Depresjon modul A',
      selected: true,
    },
    {
      name: 'Depresjon modul A',
      selected: false,
    },
  ];

  levelTwoItems = [
    {
      name: 'Startmeny',
      selected: true,
    },
    {
      name: 'Intro',
      selected: false,
    },
    {
      name: 'Screening',
      selected: false,
    },
    {
      name: 'Tid 1',
      selected: false,
    },
    {
      name: 'Tid ',
      selected: false,
    },
  ];

  levelThreeItems = [
    {
      id: 'as1',
      name: 'Har du følt deg deprimert noen gang?',
      selected: true,
    },
    {
      id: 'as2',
      name: 'Er du sikker på at du aldri har vært deprimert noen gang?',
      selected: false,
    },
    {
      id: 'as3',
      name: 'Hvor alvorlig var dette for deg?',
      selected: false,
    },
    {
      id: 'as4',
      name: 'Har du hatt det slik noen av de siste dagene?',
      selected: false,
    },
    {
      id: 'as5',
      name: 'Hvor lenge har du hatt det slik?',
      selected: false,
    },
  ];

  levelFourItem = [
    {
      key: 'Question',
      value: 'Har du følt deg deprimert noen gang?',
    },
    {
      key: 'Svaralternativer',
      value: '3',
      isArray: true,
    },
    {
      key: 'Kind',
      value: 'Question',
    },
    {
      key: 'AudioUrl',
      value: 'Assets/audio/audiom4a.mp3',
    },
  ];
  levelFourArrays = [
    {
      label: 'Svaralternativer',
      hint: 3,
      open: true,
      children: [
        {
          key: 'ja',
          value: '1',
        },
        {
          key: 'nei',
          value: '0',
        },
        {
          key: 'vet ikke',
          value: '0.5',
        },
      ],
    },
  ];

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
  toggleOpen(i: number) {
    this.levelFourArrays[i].open = !this.levelFourArrays[i].open;
  }

  toggle(trigger: any, data: { key: string; value: string | number }) {
    this.data = data;
    this.triggerOrigin = trigger;
    this.isOpen = !this.isOpen;
  }

  addListItem(i: number) {}

  addListItemWithToggle(i: number) {
    this.toggleOpen(i);
  }

  ngOnInit(): void {}
}
