import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthTypeUserComponent } from 'src/app/auth/pages/auth-type-user/auth-type-user.component';

@Component({
  selector: 'app-home-toolbar',
  templateUrl: './home-toolbar.component.html',
  styleUrls: ['./home-toolbar.component.css']
})
export class HomeToolbarComponent {

  constructor(public dialog: MatDialog) { }

  openTypeUser() {
    this.dialog.open(AuthTypeUserComponent);
  }

}
