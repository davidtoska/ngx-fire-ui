import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from 'modules/app-shell/src/lib/base-page.component';
import { StoreSync } from '@ngx-fire-ui/core';
import { FieldType, Field, SimpleFormBuilder } from '@ngx-fire-ui/app-shell';

@Component({
  selector: 'ngx-fire-ui-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent extends BasePage implements OnInit {
  pageId = 'Place your order';

  formBuilder = new SimpleFormBuilder({
    id: 'hello',
    text: 'hello from text',
  });

  fieldsSet: Field[] = [
    {
      name: 'checkbox - 0',
      type: FieldType.CHECKBOX,
      defaultValue: 'Default value textfield',
    },
    {
      name: 'textField - 1',
      type: FieldType.TEXTFIELD,
      value: 'david',
    },
    {
      name: 'textArea - 2',
      type: FieldType.TEXTAREA,
    },
    {
      name: 'select drop down - 3',
      type: FieldType.SELECTDROPDOWN,
      options: ['option 1', 'option 2'],
    },
    {
      name: 'radio button - 4',
      type: FieldType.RADIO,
      options: ['yes', 'no'],
    },
    {
      name: 'select list - 5',
      type: FieldType.SELECTLIST,
      options: ['option 1', 'option 2'],
    },

    {
      name: 'slide toggle - 6',
      type: FieldType.SLIDETOGGLE,
    },

    {
      name: 'datepicker 9',
      type: FieldType.DATEPICKER,
    },
    {
      name: 'subheader 20',
      type: FieldType.SUBHEADER,
    },
    {
      name: 'divider 21',
      type: FieldType.DIVIDER,
    },
  ];
  ui = new StoreSync({ selected: 'none' });

  constructor(protected readonly injector: Injector) {
    super(injector);
    this.formBuilder
      .checkBox({ name: 'Checkbox1' }, 'id')

      .textArea({ name: 'text-area1', value: 'hello from textArea' })
      .selectDropDown({ name: 'Select-dropdown', options: ['opt1', 'opt2'] })
      .radio({ name: 'radio 1', options: ['yes', 'no'] })
      .selectList({
        name: 'SelectList',
        options: ['selectlist1', 'selectlist2', 'selectlist3'],
      })
      .textField({
        name: 'text-field1-lets see',
        value: 'has min 20',
        min: 20,
      })
      .slideToggle({ name: 'SlideToggle1', value: false })
      .datePicker({ name: 'datepicker example' });
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
