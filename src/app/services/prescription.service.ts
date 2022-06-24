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

  prescriptionsByPatient!: Prescription[];
  prescription!: Prescription;

  constructor(
    private http: HttpClient
  ) { }

  getPrescriptionsByPatient(patient_id: number): Promise<Prescription[]> {
    return new Promise((accept, reject) => {
      const URL = `http://localhost:8000/prescriptions/patient/${patient_id}`;
      this.http.get(URL).subscribe(
        (data: any) => {
          this.prescriptionsByPatient = data;
          if (this.prescriptionsByPatient) {
            accept(data);
          }
        },
        error => reject(error)
      )
    })
  }

  getPrescription(prescription_id: number): Promise<Prescription> {
    return new Promise((accept, reject) => {
      const URL = `http://localhost:8000/prescriptions/${prescription_id}`;
      this.http.get(URL).subscribe(
        (data: any) => {
          this.prescription = data;
          if (this.prescription) {
            accept(this.prescription);
          }
        },
        error => reject(error)
      )
    })
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
          reject(error);
        }
      )
    })
  }

  updatePrescription(patient_id: number, data: any) {

  }

  deletePrescription(prescription_id: number) {
    return new Promise((accept, reject) => {
      const URL = `http://localhost:8000/prescriptions/${prescription_id}`;
      this.http.delete(URL).subscribe(
        (data: any) => {
          accept(data)
        },
        error => reject(error)
      )
    })
  }
}
