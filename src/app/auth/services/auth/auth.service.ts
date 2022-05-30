import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

//import * as users from '../../../mock/db/users.json';
import users from '../../../mock/db/users.json';
import { LoginModel } from 'src/app/core/models/loginModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  credentials!: string[][];
  errorMessage: string = '';

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  loginUserFake (credentials: { rut: any; pass: any; }): Promise<any> {

    return new Promise((resolve, reject) => {
      this.credentials = users['users'].map(credential => [credential.rut, credential.pass]);
      this.credentials.forEach(credential => {
      if  (credential[0] === credentials.rut && credential[1] === credentials.pass) {
        resolve(localStorage.setItem('isLogged', 'true'));
      } else {
        reject({'error': 'Credenciales erróneas.'})
      }
      })
    })

  }

  loginUser(credentials: LoginModel) {
    return new Promise((accept, reject) => {
      const URL = 'http://localhost:8000/login';
      let headers = new HttpHeaders({
        'content-type': 'application/json',
      })
      let options = {headers: headers}
      this.http.post(URL, credentials, options).subscribe(
        data => {
          accept(data)
        },
        error => {
          reject();
        }
      )
    })
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('auth/login')
  }
}
