import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AuthLoginAdminComponent } from './pages/auth-login-admin/auth-login-admin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin', component: AuthLoginAdminComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
