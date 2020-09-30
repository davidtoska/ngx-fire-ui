import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedMenuComponent } from './nested-menu.component';
import { KeyValueEditorComponent } from './key-value-editor/key-value-editor.component';
import { KeyValuePairComponent } from './key-value-pair/key-value-pair.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatRippleModule,
    OverlayModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
  ],
  declarations: [
    NestedMenuComponent,
    KeyValueEditorComponent,
    KeyValuePairComponent,
  ],
  exports: [
    NestedMenuComponent,
    KeyValueEditorComponent,
    KeyValuePairComponent,
  ],
})
export class NestedMenuModule {}
