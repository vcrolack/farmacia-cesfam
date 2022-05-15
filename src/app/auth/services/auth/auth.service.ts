import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

//import * as users from '../../../mock/db/users.json';
import users from '../../../mock/db/users.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  credentials!: string[][];
  errorMessage: string = '';

  constructor(
    private router: Router
  ) { }

  loginUser (credentials: { rut: any; pass: any; }): Promise<any> {

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

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('auth/login')
  }
}
