import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userStorage: any = localStorage.getItem('user');
  user!: any;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(this.userStorage);
    switch (this.user.role_id) {
      case 1:
        this.user.role_name = 'Médico'
        break
      case 2:
        this.user.role_name = 'Farmacéutico'
        break;
      case 3:
        this.user.role_name = 'Administrador'
        break

    }
  }

}
