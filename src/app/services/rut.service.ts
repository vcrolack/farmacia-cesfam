import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RutService {

  response!: any;
  constructor(
    private http: HttpClient
  ) { }

  validateRut(rut:string) {
    return new Promise((accept, reject) => {
      const URL =`https://api.libreapi.cl/rut/validate?rut=${rut}`;
      this.http.get(URL).subscribe(
        (data: any) => {
          this.response = data;
          if (this.response) {
            accept(this.response);
          }
        },
        error => reject(error)
      )
    })
  }
}
