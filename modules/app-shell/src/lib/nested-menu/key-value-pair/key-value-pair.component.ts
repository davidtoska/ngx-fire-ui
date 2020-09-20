import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'npx-fire-ui-key-value-pair',
  templateUrl: './key-value-pair.component.html',
  styleUrls: ['./key-value-pair.component.scss'],
})
export class KeyValuePairComponent implements OnInit {
  @Input() keyValue!: {
    key: string;
    value: string | number;
    deletable?: boolean;
  };
  @Input() isChild?: boolean;

  constructor() {}

  ngOnInit(): void {}
}
