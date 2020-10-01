import { Field, FieldType } from './types';
import { Validators } from '@angular/forms';
import { isNumber } from '../isFunctions';
type CheckboxParams = Pick<Field<boolean>, 'name' | 'value' | 'defaultValue'>;
type TextFieldParams = Pick<
  Field<string>,
  'name' | 'value' | 'defaultValue'
> & { min?: number; max?: number };
type TextAreaParams = Pick<Field<string>, 'name' | 'value' | 'defaultValue'>;
type SelectDropdownParams = Pick<Field<string>, 'name' | 'value' | 'options'>;
type RadioParams = Pick<Field<string | number>, 'name' | 'value' | 'options'>;
type SelectListParams = Pick<Field<string>, 'name' | 'value' | 'options'>;
type SlideToggleParams = Pick<Field<boolean>, 'name' | 'value'>;
type DatePickerParams = Pick<Field<Date>, 'name' | 'value'>;
type OnlyName = Pick<Field, 'name'>;

export interface FormUiOptions {
  width: number;
  backgroundColor: string;
  submitText: string;
}

export class SimpleFormBuilder<T = any> {
  private fields: Field[] = [];
  private readonly model: T;
  private config: FormUiOptions;

  /**
   *
   * @param model The model each form-field should be mapped to.
   */
  constructor(model: T) {
    this.model = model;
    this.config = {
      width: 300,
      backgroundColor: '',
      submitText: 'Submit',
    };
  }

  checkBox(params: CheckboxParams, key: keyof T): SimpleFormBuilder {
    this.fields.push({
      name: params.name,
      type: FieldType.CHECKBOX,
    });
    return this;
  }

  textField(params: TextFieldParams) {
    const value = params.value ?? params.defaultValue ?? '';
    const min = params.min;
    const max = params.max;

    const newTextField: Field<string> = {
      name: params.name,
      type: FieldType.TEXTFIELD,
      value,
    };

    if (isNumber(min) && min > 0) {
      newTextField.validation = [Validators.min(min)];
    }

    this.fields.push(newTextField);
    return this;
  }

  textArea(params: TextAreaParams): SimpleFormBuilder {
    const value = params.value ?? params.defaultValue ?? '';

    const textArea: Field<string> = {
      name: params.name,
      type: FieldType.TEXTAREA,
      value,
    };
    this.fields.push(textArea);
    return this;
  }

  selectDropDown(params: SelectDropdownParams): SimpleFormBuilder {
    const value = params.value ?? '';
    const options = params.options ?? [];
    const selectDropdown: Field<string> = {
      name: params.name,
      type: FieldType.SELECTDROPDOWN,
      value,
      options,
    };
    this.fields.push(selectDropdown);
    return this;
  }

  radio(parmas: RadioParams) {
    const value = parmas.value;
    const options = Array.isArray(parmas.options)
      ? [...parmas.options]
      : ['You need to define some options'];
    const newRadio: Field<string | number> = {
      name: parmas.name,
      type: FieldType.RADIO,
      value,
      options,
    };
    this.fields.push(newRadio);
    return this;
  }

  selectList(params: SelectListParams) {
    const value = params.value;
    const options = Array.isArray(params.options)
      ? [...params.options]
      : ['You need to define options'];

    const newSelectList: Field<string> = {
      name: params.name,
      type: FieldType.SELECTLIST,
      value,
      options,
    };
    this.fields.push(newSelectList);
    return this;
  }

  slideToggle(params: SlideToggleParams) {
    const value = params.value ?? false;
    const newSlideToggle: Field<boolean> = {
      name: params.name,
      type: FieldType.SLIDETOGGLE,
      value,
    };
    this.fields.push(newSlideToggle);
    return this;
  }

  datePicker(params: DatePickerParams) {
    const value = params.value ?? undefined;
    const newDatePicker: Field<Date> = {
      name: params.name,
      type: FieldType.DATEPICKER,
      value,
    };
    this.fields.push(newDatePicker);
    return this;
  }

  subHeader(params: OnlyName) {
    const newSubHeader: Field<void> = {
      name: params.name,
      type: FieldType.SUBHEADER,
    };
    this.fields.push(newSubHeader);
    return this;
  }

  divider(params: OnlyName) {
    const divider: Field<void> = {
      name: params.name,
      type: FieldType.DIVIDER,
    };
    this.fields.push(divider);
    return this;
  }

  uiOptions(options: Partial<FormUiOptions>) {
    this.config = { ...this.config, ...options };
    return this;
  }

  build(): Field[] {
    if (this.fields.length === 0) {
      console.warn('You need to define some fields in the fieldbuilder.');
    }
    return Array.isArray(this.fields) ? [...this.fields] : [];
  }
}
