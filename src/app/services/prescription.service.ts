import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Prescription } from '../core/models/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  msg: Object = {
    state: '',
    description: ''
  }

  constructor(
    private http: HttpClient
  ) { }

  getPrescriptionsByPatient(patient_id: number) {

  }

  getPrescriptionByPatient(patient_id: number) {

  }

  createPrescription(data: any) {
    return new Promise((accept, reject) => {
      const URL = 'http://localhost:8000/prescriptions';
      const headers = new HttpHeaders({
        'content-type': 'application/json'
      })
      const options = {headers: headers};
      this.http.post(URL, data, options).subscribe(
        (data: any) => {
          this.msg = {
            state: 'success',
            description: 'Se ha creado la prescripción'
          };
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

  updatePrescription(patient_id: number, data: any) {

  }

  deletePrescription(prescription_id: number) {

  }
}
