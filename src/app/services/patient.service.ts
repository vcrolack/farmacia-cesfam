import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Patient } from '../core/models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients!: Patient[];

  msg = {
    state: '',
    description: ''
  }

  constructor(
    private http: HttpClient
  ) { }

  getPatients(): Promise<Patient[]> {
    return new Promise((accept, reject) => {
      const URL = 'http://localhost:8000/patients';
      this.http.get(URL).subscribe(
        (data: any) => {
          this.patients = data;
          if (this.patients) {
            accept(this.patients)
          }
        },
        error => reject()
      )
    })
  }

  createPatient(data: any) {
    return new Promise((accept, reject) => {
      const URL = 'http://localhost:8000/patients';
      let headers = new HttpHeaders({
        'content-type': 'application/json',
      })
      let options = {headers: headers}
      this.http.post(URL, data, options).subscribe(
        data => {
          this.msg = {
            state: 'success',
            description: 'Paciente creado con éxito'
          }
          accept(this.msg);
        },
        error => {
          this.msg = {
            state: 'error',
            description: 'Ha ocurrido un error.'
          }
          reject(this.msg);
        }
      )
    })
  }

}
