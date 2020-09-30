import { Validators, ValidatorFn } from '@angular/forms';

export enum FieldType {
  CHECKBOX = 0,
  TEXTFIELD = 1,
  TEXTAREA = 2,
  SELECTDROPDOWN = 3,
  RADIO = 4,
  SELECTLIST = 5,
  SLIDETOGGLE = 6,
  DATEPICKER = 9,
  SUBHEADER = 20,
  DIVIDER = 21,
}

export interface Field<T = any> {
  name: string;
  type: FieldType;
  children?: ChildField[];
  value?: T;
  defaultValue?: T;
  disabled?: boolean;
  options?: string[];
  //   parent?: string;
  validation?: ValidatorFn[];
  //   visible?: boolean;
}

export type ChildField = Omit<Field, 'children'>;

// export interface KeyValuePair<T = any> {
//   key: string;
//   value: T;
// }
