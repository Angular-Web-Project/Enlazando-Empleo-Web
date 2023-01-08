import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailInputComponent } from './components/inputs/email-input/email-input.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    EmailInputComponent
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
