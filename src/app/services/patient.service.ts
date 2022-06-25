import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Patient } from '../core/models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients!: Patient[];
  patient!: Patient;

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

  getPatient(rut: string): Promise<Patient> {
    return new Promise((accept, reject) => {
      const URL = `http://localhost:8000/patients/${rut}`;
      this.http.get(URL).subscribe(
        (data: any) => {
          accept(data);
        }
      )
    })
  }

  getPatientById(patient_id: number): Promise<Patient> {
    return new Promise((accept, reject) => {
      const URL = `http://localhost:8000/patients/id/${patient_id}`;
      this.http.get(URL).subscribe(
        (data: any) => {
          this.patient = data;
          if (this.patient) {
            accept(this.patient)
          }
        },
        error => reject(error)
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

  updatePatient(rut: string, data: Patient) {
    return new Promise((accept, reject) => {
      const URL = `http://localhost:8000/patients/${rut}`;
      let headers = new HttpHeaders({
        'content-type': 'application/json'
      });
      let options = {headers: headers};
      this.http.put(URL, data, options).subscribe(
        (data: any) => {
          this.msg = {
            state: 'success',
            description: 'Paciente editado'
          }
          accept(this.msg);
        },
        error => {
          this.msg = {
            state: 'error',
            description: 'Ha ocurrido un error'
          };
          reject(this.msg);
        }
      )
    })
  }
}
