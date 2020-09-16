import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Field } from '../types';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { SimpleFormBuilder, FormUiOptions } from '../simple-form-builder';
import { StoreSync } from '@ngx-fire-ui/core';

@Component({
  selector: 'ngx-fire-ui-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() fieldConfig: Field[] | SimpleFormBuilder = [];
  @Output() emitFormValues = new EventEmitter<Field[]>();

  ui = new StoreSync<FormUiOptions>({
    width: 300,
    backgroundColor: '',
    submitText: 'Submit',
  });

  fields: Field[] = [];

  public form: FormGroup;
  public formReady = true;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    if (this.fieldConfig instanceof SimpleFormBuilder) {
      const fields = this.fieldConfig.build();
      this.fields = [...fields];
    } else if (Array.isArray(this.fieldConfig)) {
      this.fields = [...this.fieldConfig];
    }

    this.fields.forEach((field) => {
      const value = field.value ?? field.defaultValue ?? undefined;
      const valSync = field.validation ? [...field.validation] : [];
      const newFormControll = this.fb.control(value, valSync);
      if (valSync.length > 0) {
        console.log('HAS VALIDATOR: ' + field.name);
        console.log(newFormControll);
      }
      if (field.disabled) {
        newFormControll.disable();
      }

      this.form.addControl(field.name, newFormControll);
      this.form.updateValueAndValidity({ emitEvent: false });
    });

    this.form.valueChanges.subscribe((v) => {
      console.log('Form Valid: ' + this.form.valid);
      console.log('Form Valid: ' + this.form.valid);

      // this.form.controls.textfiled1?.updateValueAndValidity({
      //   emitEvent: false,
      // });
    });
  }

  onSubmit(event: any) {
    console.log(event);
  }
}
