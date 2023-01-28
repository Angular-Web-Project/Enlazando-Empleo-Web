import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWelcomeComponent } from './pages/home-welcome/home-welcome.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'welcome', component: HomeWelcomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
