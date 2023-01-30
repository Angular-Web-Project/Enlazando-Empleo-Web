import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeWelcomeComponent } from './pages/home-welcome/home-welcome.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeToolbarComponent } from './components/home-toolbar/home-toolbar.component';
import { PrincipalSectionComponent } from './components/principal-section/principal-section.component';
import { RegisterEmployeeCardComponent } from './components/register-employee-card/register-employee-card.component';
import { RegisterEmployerCardComponent } from './components/register-employer-card/register-employer-card.component';



@NgModule({
  declarations: [
    HomeWelcomeComponent,
    HomeToolbarComponent,
    PrincipalSectionComponent,
    RegisterEmployeeCardComponent,
    RegisterEmployerCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    AngularMaterialModule,
    SharedModule,
    
  ]
})
export class HomeModule { }
