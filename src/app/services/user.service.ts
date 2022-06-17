import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  msg = {
    state: '',
    description: ''
  }

  users!: User[]

  roles: Object[] = [
    {id: 1, name: 'Médico'},
    {id: 2, name: 'Farmacéutico'},
    {id: 3, name: 'Administrador'}
  ]

  constructor(
    private http: HttpClient
  ) { }

  postUser(data: any) {
    return new Promise((accept, reject) => {
      const URL = 'http://localhost:8000/users';
      let headers = new HttpHeaders({
        'content-type': 'application/json',
      })
      let options = {headers: headers}
      this.http.post(URL, data, options).subscribe(
        data => {
          this.msg = {
            state: 'success',
            description: 'Usuario creado con éxito.'
          }
          accept(this.msg)
        },
        error => {
          this.msg = {
            state: 'error',
            description: 'Ha ocurrido un error.'
          }
          reject(this.msg)
        }
      )
    })
  }

  getUsers(): Promise<User[]> {
    return new Promise((accept, reject) => {
      const URL = 'http://localhost:8000/users'
      this.http.get(URL).subscribe(
        (data: any) => {
          this.users = data;

          if (this.users) {
            accept(this.users);
          }
        },
        error => {
          reject();
        }
      )
    })
  }

  getUser(rut: string): Promise<User> {
    return new Promise((accept, reject) => {
      const URL = `http://localhost:8000/users/${rut}`;
      this.http.get(URL).subscribe(
        (data: any) => {
          console.log(data)
        }
      )
    })
  }

  updateUser(rut: string, data: any) {
    return new Promise((accept, reject) => {
      const URL = `http://localhost:8000/users/${rut}`;
      let headers = new HttpHeaders({
        'content-type': 'application/json',
      })
      let options = {headers: headers}
      this.http.put(URL, data, options).subscribe(
        (data: any) => {
          this.msg = {
            state: 'success',
            description: 'Usuario creado con éxito.'
          }
          accept(this.msg);
        },
        error => {
          this.msg = {
            state: 'error',
            description: 'Ha ocurrido un error.'
          }
          reject(this.msg)
        }
      )
    })
  }

  deleteUser(rut: string) {
    return new Promise((accept, reject) => {
      const URL = `http://localhost:8000/users/${rut}`;
      this.http.delete(URL).subscribe(
        (data: any) => {
          accept(data);
        },
        error => {
          reject(error);
        }
      )
    })
  }
}
