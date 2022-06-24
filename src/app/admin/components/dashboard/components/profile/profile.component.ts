import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userStorage: any = localStorage.getItem('user');
  user!: User;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(this.userStorage);
  }

}
