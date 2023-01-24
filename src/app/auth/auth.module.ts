import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginAdminComponent } from './pages/auth-login-admin/auth-login-admin.component';
import { LoginAdminFormComponent } from './components/login-admin-form/login-admin-form.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AuthLoginEmployeeComponent } from './pages/auth-login-employee/auth-login-employee.component';
import { AuthLoginEmployerComponent } from './pages/auth-login-employer/auth-login-employer.component';


@NgModule({
  declarations: [
    AuthLoginAdminComponent,
    LoginAdminFormComponent,
    AuthLoginEmployeeComponent,
    AuthLoginEmployerComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    SharedModule
  ],
  exports: [
    
  ]
})
export class AuthModule { }
