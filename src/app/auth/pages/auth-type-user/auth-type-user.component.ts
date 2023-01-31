import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthLoginEmployeeComponent } from '../auth-login-employee/auth-login-employee.component';
import { AuthLoginEmployerComponent } from '../auth-login-employer/auth-login-employer.component';

@Component({
  selector: 'app-auth-type-user',
  templateUrl: './auth-type-user.component.html',
  styleUrls: ['./auth-type-user.component.css']
})
export class AuthTypeUserComponent {
  
  constructor(public dialog: MatDialog) { }
  
  openLoginEmployee() {
    this.dialog.open(AuthLoginEmployeeComponent);
  }

  openLoginEmployer() {
    this.dialog.open(AuthLoginEmployerComponent);
  }

}
