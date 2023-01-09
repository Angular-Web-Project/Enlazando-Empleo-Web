import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginAdminComponent } from './pages/auth-login-admin/auth-login-admin.component';
import { LoginAdminFormComponent } from './components/login-admin-form/login-admin-form.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [
    AuthLoginAdminComponent,
    LoginAdminFormComponent
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
