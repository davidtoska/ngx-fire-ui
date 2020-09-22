import { Component, OnInit } from '@angular/core';

interface LevelIndex {
  hasSelected: boolean;
  index: number;
  array: boolean | null;
  depth: number;
}

@Component({
  selector: 'npx-fire-ui-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss'],
})
export class NestedMenuComponent implements OnInit {
  appConfig = {
    contextName: 'Depresjon modul A',
  };

  selectedIndexes: LevelIndex[] = [
    { hasSelected: false, index: 0, array: false, depth: 1 },
    { hasSelected: false, index: -1, array: true, depth: 2 },
    { hasSelected: false, index: 1, array: true, depth: 3 },
    { hasSelected: false, index: 1, array: true, depth: 4 },
  ];

  boardConfig = {
    depth: 1,
    showDetailView: false,
    selectedNames: ['', '', '', ''],
    icons: ['wysiwyg', 'view_headline', 'question_answer', 'done'],
    buttons: ['Ny sekvens', 'Nytt spørsmål', 'Nytt felt', ''],
  };

  triggerOrigin: any;
  isOpen = false;
  data!: { key: string; value: string | number; deletable?: boolean };

  items = [
    // Her er det som står i første kollonne
    [
      {
        id: 'Startmeny',
        selected: false,
      },
      {
        id: 'Intro',
        selected: false,
      },
      {
        id: 'Screening',
        selected: false,
      },
      {
        id: 'Tid 1',
        selected: false,
      },
      {
        id: 'Tid ',
        selected: false,
      },
    ],
    // Her er dokumentene som står i andre kollonne
    [
      {
        id: 'innstillinger',
        selected: false,
      },
      {
        id: 'annen greie',
        selected: false,
      },
      {
        id: 'singleton',
        selected: false,
      },
    ],
    // Her er dokumentene som står i tredje kollonne
    [
      {
        id: 'as1',
        selected: false,
      },
      {
        id: 'as2',
        selected: false,
      },
      {
        id: 'as3',
        selected: false,
      },
    ],
  ];

  arrays = [
    // Listene / collections i andre kollonne
    [
      {
        id: 'requirements',
        selected: false,
      },
      {
        id: 'spørsmål',
        selected: false,
      },
    ],
    // Listene / collections i tredje kollonne
    [
      {
        id: 'enda dypere drit',
        selected: false,
      },
    ],
  ];

  detailData = {
    keyValuePairs: [{ key: 'test', value: '2' }],
    arrays: [
      {
        open: true,
        label: 'arraytest',
        children: [
          {
            keyValues: [
              { key: 'test', value: '2', open: true },
              { key: 'test', value: '2', open: true },
            ],
            deletable: true,
            open: true,
          },
        ],
      },
    ],
  };

  constructor() {}

  get depth(): number {
    return this.boardConfig.depth;
  }

  get detailView(): boolean {
    return this.boardConfig.showDetailView;
  }

  setDepth(d: number) {
    this.boardConfig.depth = d;
    console.log(this.boardConfig.depth);
  }

  showDetailView(show: boolean) {
    this.boardConfig.showDetailView = show;
  }

  deselectCurrent(level: number) {
    const indexRef = this.selectedIndexes[level];
    if (indexRef.hasSelected === false) {
      return console.log('No item was previously selected');
    }
    if (indexRef.hasSelected === true) {
      if (indexRef.array === true) {
        const arrayRef = this.arrays[level - 1][indexRef.index];
        arrayRef.selected = false;
      }
      if (indexRef.array === false) {
        const itemRef = this.items[level][indexRef.index];
        itemRef.selected = false;
      }
    }
  }

  selectNewItem(level: number, i: number, isArray: boolean) {
    const indexRef = this.selectedIndexes[level];

    if (isArray === true) {
      const arrayRef = this.arrays[level - 1][i];
      console.log('Selecting new array');
      arrayRef.selected = true;
      console.log('Selected new array');
    }
    if (isArray === false) {
      const itemRef = this.items[level][i];
      console.log('Selecting new item');
      itemRef.selected = true;
      console.log('Selected new item');
    }

    console.table(this.selectedIndexes);
    console.log({ level });
    console.log(indexRef);
    indexRef.hasSelected = true;
    indexRef.array = isArray;
    indexRef.index = i;
    console.log(indexRef);
  }

  selectItem(level: number, i: number, isArray: boolean) {
    console.log('Start of function');
    const indexRef = this.selectedIndexes[level];

    this.deselectCurrent(level);

    if (
      indexRef.hasSelected === true &&
      indexRef.array === isArray &&
      indexRef.index === i
    ) {
      indexRef.hasSelected = false;
      this.setDepth(level + 1);
      this.showDetailView(false);

      return;
    }
    this.selectNewItem(level, i, isArray);

    if (isArray === false && level > 0) {
      this.setDepth(level + 1);
      this.showDetailView(true);
    }
    if (isArray === false && level === 0) {
      this.showDetailView(false);
      this.setDepth(level + 2);
    }
    if (isArray === true) {
      this.showDetailView(false);
      this.setDepth(level + 2);
    }

    // this.setDepth(level + 2);

    // if (this.itemIsCurrentlySelected(level, i) === true) {
    //   if (isArray === true) {
    //     this.deselectCurrentArray(level);
    //     this.setDepth(level);
    //   }
    // }
    // if (this.itemIsCurrentlySelected(level, i) === false) {
    //   this.deselectCurrentArray(level);
    //   this.deselectCurrentItem(level);
    //   this.selectNewItem(level, i, isArray);
    //   this.boardConfig.selectedIndexes[level] = i;

    //   this.setDepth(level + 1);
    // }

    // console.log(this.boardConfig.selectedIndexes[level]);
    // if (level === 1) {
    //   if (this.boardConfig.selectedIndexes[level] === i && this.depth > 1) {
    //     this.items[level][i].selected = false;
    //     this.boardConfig.selectedIndexes[level] = null;
    //     console.log(this.boardConfig.selectedIndexes[level]);
    //     this.setDepth(1);
    //   } else {
    //     this.items[level - 1][
    //       this.boardConfig.selectedIndexes[level - 1]
    //     ].selected = false;
    //     this.boardConfig.selectedIndexes[level - i] = i;
    //     this.items[level - 1][i].selected = true;
    //     this.setDepth(2);
    //   }
    // }
    // if (i === this.boardConfig.selectedIndexes[level - 1]) {
    //   if (this.detailView === true) {
    //     this.showDetailView(false);
    //   }
    //   this.items[level - 1][
    //     this.boardConfig.selectedIndexes[level - 1]
    //   ].selected = false;
    //   this.boardConfig.selectedNames[level - 1] = '';
    //   this.setDepth(level);
    //   return;
    // }
    // this.items[level - 1][
    //   this.boardConfig.selectedIndexes[level]
    // ].selected = false;
    // this.items[level][i].selected = true;
    // this.boardConfig.selectedIndexes[level] = i;
    // this.boardConfig.selectedNames[level] = this.items[level][i].id;
    // if (level === 1) {
    //   this.setDepth(level + 1);
    // } else {
    //   this.showDetailView(true);
    // }
  }

  // dOneSelect(i: number) {
  //   if (i === this.boardConfig.levelOneSelectedIndex && this.depth > 1) {
  //     this.levelOneItems[
  //       this.boardConfig.levelOneSelectedIndex
  //     ].selected = false;
  //     this.boardConfig.levelOneSelectedName = '';
  //     this.setDepth(1);
  //     return;
  //   }
  //   this.levelOneItems[this.boardConfig.levelOneSelectedIndex].selected = false;
  //   this.levelOneItems[i].selected = true;
  //   this.boardConfig.levelOneSelectedIndex = i;
  //   this.boardConfig.levelOneSelectedName = this.levelOneItems[i].name;
  //   this.setDepth(2);
  // }

  // dTwoItemSelect(i: number) {
  //   if (i === this.levelTwoIndex && this.depth > 2) {
  //     this.setDepth(2);
  //     this.boardConfig.levelTwoSelectedName = '';
  //     this.levelTwoItems[this.levelTwoIndex].selected = false;
  //     this.showDetailView(false);
  //     return;
  //   } else if (i === this.levelTwoIndex && this.detailView === true) {
  //     this.boardConfig.levelTwoSelectedName = '';
  //     this.levelTwoItems[this.levelTwoIndex].selected = false;
  //     this.showDetailView(false);
  //   } else {
  //     this.levelTwoItems[this.levelTwoIndex].selected = false;
  //     this.levelTwoItems[i].selected = true;
  //     this.boardConfig.levelTwoSelectedIndex = i;
  //     this.boardConfig.levelTwoSelectedName = this.levelTwoItems[i].id;
  //     this.showDetailView(true);
  //   }
  // }
  // dTwoArraySelect(i: number) {
  //   if (this.levelTwoArrays[i].selected === true) {
  //     this.levelTwoArrays[i].selected = false;
  //     this.setDepth(2);
  //     return;
  //   }
  //   this.levelTwoArrays[i].selected = true;
  //   this.setDepth(3);
  // }

  // levelTwoSelect(i: number) {
  //   this.levelTwoItems[this.boardConfig.levelTwoSelectedIndex].selected = false;
  //   this.levelTwoItems[i].selected = true;
  //   this.boardConfig.levelTwoSelectedIndex = i;
  //   this.boardConfig.levelTwoSelectedName = this.levelTwoItems[i].name;
  // }
  toggleOpen(i: number) {
    this.detailData.arrays[i].open = !this.detailData.arrays[i].open;
  }

  toggleSubParent(arrayIndex: number, childIndex: number) {
    const childRef = this.detailData.arrays[arrayIndex].children[childIndex];
    childRef.open = !childRef.open;
  }

  toggle(
    trigger: any,
    data: { key: string; value: string | number; deletable?: false }
  ) {
    this.data = data;
    this.triggerOrigin = trigger;
    this.isOpen = !this.isOpen;
  }
  closeEditor() {
    this.isOpen = !this.isOpen;
  }
  addListItem(i: number) {}

  addListItemWithToggle(i: number) {
    this.toggleOpen(i);
  }

  ngOnInit(): void {}
}
