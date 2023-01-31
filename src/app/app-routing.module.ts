import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWelcomeComponent } from './home/pages/home-welcome/home-welcome.component';


const routes: Routes = [
  {
    path: '', component: HomeWelcomeComponent
  },
  {
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule)
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
