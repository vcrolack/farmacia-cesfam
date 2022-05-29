import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  msg = {
    state: '',
    description: ''
  }

  constructor(
    private http: HttpClient
  ) { }

  postUser(data: any) {
    // const URL = 'http://localhost:8000/users';
    // let headers = new HttpHeaders({
    //   'content-type': 'application/json',
    // })
    // let options = {headers: headers}
    let newUser = {
      "email": data.email,
      "first_name": data.first_name,
      "second_name": data.second_name,
      "last_name": data.last_name,
      "password": data.password,
      "role_id": data.role_id,
      "rut": data.rut,
      "specialty_id": data.specialty_id
    }
    console.log(newUser)
    //return this.http.post<any>(URL, newUser, options)
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
}
