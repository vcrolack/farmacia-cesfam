import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Medicament } from '../core/models/medicament';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {

  medicaments!: Medicament[];
  msg: Object = {
    state: '',
    description: ''
  };
  constructor(
    private http: HttpClient
  ) { }

  getMedicaments(): Promise<Medicament[]> {
    return new Promise((accept, reject) => {
      const URL = 'http://localhost:8000/medicaments';
      this.http.get(URL).subscribe(
        (data: any) => {
          this.medicaments = data;
          if (this.medicaments) {
            accept(this.medicaments);
          }
        },
        error => reject()
      )
    })
  }

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

  updateMedicament(id: number, data: any) {
    return new Promise((accept, reject) => {
      const URL = `http://localhost:8000/medicaments/${id}`;
      const headers = new HttpHeaders({
        'content-type': 'application/json'
      })
      const options = {headers: headers};
      this.http.put(URL, data, options).subscribe(
        (data) => {
          this.msg = {
            state: 'success',
            description: 'Medicamento editado'
          }
          accept(this.msg)
        },
        error => {
          this.msg = {
            state: 'error',
            description: 'Ha ocurrido un error'
          }
          reject(error);
        }
      )
    })
  }

  deleteMedicament(id: number) {
    return new Promise((accept, reject) => {
      const URL =`http://localhost:8000/medicaments/${id}`;
      this.http.delete(URL).subscribe(
        (data: any) => {
          accept(data);
        },
        error => reject(error)
      )
    })
  }
}
