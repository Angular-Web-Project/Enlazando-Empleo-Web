import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { EmailInputComponent } from './components/inputs/email-input/email-input.component';
import { HomeToolbarComponent } from './components/toolbars/home-toolbar/home-toolbar.component';



@NgModule({
  declarations: [
    EmailInputComponent,
    HomeToolbarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    EmailInputComponent
  ]
})
export class SharedModule { }
