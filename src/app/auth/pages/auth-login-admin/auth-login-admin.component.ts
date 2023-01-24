import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-login-admin',
  templateUrl: './auth-login-admin.component.html',
  styleUrls: ['./auth-login-admin.component.css']
})
export class AuthLoginAdminComponent {

  adminContent = `Login exclusivo para el uso del Administrador del sistema`;

  adminFooter = 'admin 2023';

}