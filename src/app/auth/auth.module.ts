import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginAdminComponent } from './pages/auth-login-admin/auth-login-admin.component';
import { LoginAdminFormComponent } from './components/login-admin-form/login-admin-form.component';


@NgModule({
  declarations: [
    AuthLoginAdminComponent,
    LoginAdminFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  exports: [
    
  ]
})
export class AuthModule { }
