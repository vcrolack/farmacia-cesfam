import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Medicament } from '../core/models/medicament';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  msg: Object = {
    state: '',
    description: ''
  };
  constructor(
    private http: HttpClient
  ) { }

  createMedicament(data: any) {
    return new Promise((accept, reject) => {
      const URL = 'http://localhost:8000/medicaments';
      const headers = new HttpHeaders({
        'content-type': 'application/json'
      })
      const options = {headers: headers}
      this.http.post(URL, data, options).subscribe(
        (data: any) => {
          this.msg = {
            state: 'success',
            description: 'Medicamento creado'
          }
          accept(this.msg);
        },
        error => {
          this.msg = {
            state: 'error',
            description: 'Ha ocurrido un error'
          }
          reject(this.msg);
        }
      )
    })
  }
}
