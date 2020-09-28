import { Component, OnInit, Input } from '@angular/core';
import { Field, FieldType } from '../types';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { isString } from '@ngx-fire-ui/core';

@Component({
  selector: 'ngx-fire-ui-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit {
  @Input()
  public field!: Field;
  public control!: FormControl;

  constructor(private readonly formGroupDir: FormGroupDirective) {}

  ngOnInit(): void {
    const name = this.field?.name;
    if (!isString(name)) {
      console.error('Must provide a name attribute on field input');
      return;
    }

    const control = this.formGroupDir.control.get(name);

    if (control instanceof FormControl) {
      this.control = control;
      if (Array.isArray(control.validator)) {
        console.warn('Has Validator array: ' + name);
        console.log(control);
      }
    } else {
      console.warn('No formcontroll by name: ' + name);
    }

    this.control.valueChanges.subscribe((v) => {
      console.log('VALUE CHANGES ON CONTROLLER' + v);
      this.control.updateValueAndValidity({ emitEvent: false });
      console.log(this.control.valid);
    });
  }
}
