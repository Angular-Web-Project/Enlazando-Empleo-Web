import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { EmailInputComponent } from './components/inputs/email-input/email-input.component';
import { HomeToolbarComponent } from './components/toolbars/home-toolbar/home-toolbar.component';
import { LoginButtonComponent } from './components/buttons/login-button/login-button.component';



@NgModule({
  declarations: [
    EmailInputComponent,
    HomeToolbarComponent,
    LoginButtonComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    EmailInputComponent,
    LoginButtonComponent
  ]
})
export class SharedModule { }
