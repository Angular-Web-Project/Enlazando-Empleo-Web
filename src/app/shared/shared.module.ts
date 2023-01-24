import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { EmailInputComponent } from './components/inputs/email-input/email-input.component';
import { HomeToolbarComponent } from './components/toolbars/home-toolbar/home-toolbar.component';
import { LoginButtonComponent } from './components/buttons/login-button/login-button.component';
import { CancelButtonComponent } from './components/buttons/cancel-button/cancel-button.component';
import { PasswordInputComponent } from './components/inputs/password-input/password-input.component';



@NgModule({
  declarations: [
    EmailInputComponent,
    HomeToolbarComponent,
    LoginButtonComponent,
    CancelButtonComponent,
    PasswordInputComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    EmailInputComponent,
    LoginButtonComponent,
    CancelButtonComponent,
    PasswordInputComponent
  ]
})
export class SharedModule { }
