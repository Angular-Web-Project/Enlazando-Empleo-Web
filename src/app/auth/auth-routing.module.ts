import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginAdminComponent } from './pages/auth-login-admin/auth-login-admin.component';
import { AuthLoginEmployeeComponent } from './pages/auth-login-employee/auth-login-employee.component';
import { AuthLoginEmployerComponent } from './pages/auth-login-employer/auth-login-employer.component';
import { AuthForgetPasswordComponent } from './pages/auth-forget-password/auth-forget-password.component';
import { AuthResetPasswordComponent } from './pages/auth-reset-password/auth-reset-password.component';
import { AuthTypeUserComponent } from './pages/auth-type-user/auth-type-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin', component: AuthLoginAdminComponent
      },
      {
        path: 'employee', component: AuthLoginEmployeeComponent
      },
      {
        path: 'employer', component: AuthLoginEmployerComponent
      },
      {
        path: 'forget', component: AuthForgetPasswordComponent
      },
      {
        path: 'reset', component: AuthResetPasswordComponent
      },
      {
        path: 'type-user', component: AuthTypeUserComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
