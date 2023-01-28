import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeWelcomeComponent } from './pages/home-welcome/home-welcome.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeWelcomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    AngularMaterialModule,
    SharedModule
  ]
})
export class HomeModule { }
