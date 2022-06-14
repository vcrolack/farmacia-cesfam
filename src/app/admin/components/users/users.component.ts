import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id','Nombre', 'Segundo nombre', 'Apellido Paterno', 'Apellido materno', 'Rut', 'Rol', 'Especialidad' ];
  users!: User[];
  faPlus: IconDefinition = faPlus;


  constructor(
    private userService: UserService
  ) {}

  async ngOnInit() {
    await this.getUsers()
    console.log(this.users)
    
  }

  async getUsers() {
    this.users = await this.userService.getUsers()
    return this.users
  }

  async deleteUser (rut: string) {
    this.userService.deleteUser(rut);
  }

}
