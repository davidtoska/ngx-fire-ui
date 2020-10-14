import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-fire-ui-key-value-editor',
  templateUrl: './key-value-editor.component.html',
  styleUrls: ['./key-value-editor.component.scss'],
})
export class KeyValueEditorComponent implements OnInit {
  @Input() data!: { key: string; value: string | number; deletable?: boolean };
  @Output() closeEditor = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  callParentToggle() {
    this.closeEditor.emit();
    console.log('emitted closeEditor');
  }
}
