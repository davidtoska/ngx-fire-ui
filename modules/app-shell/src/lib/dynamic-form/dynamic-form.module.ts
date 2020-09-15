import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormComponent } from './form/form.component';
import { SentenceCasePipe } from './sentence-case.pipe';

@NgModule({
  declarations: [FormFieldComponent, FormComponent, SentenceCasePipe],
  imports: [CommonModule],
  exports: [FormFieldComponent, FormComponent],
})
export class DynamicFormModule {}
