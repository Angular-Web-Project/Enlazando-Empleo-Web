import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  exports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule
  ]
})
export class AngularMaterialModule { }
