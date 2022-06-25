import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MedicDate } from '../core/models/medic-date';

@Injectable({
  providedIn: 'root'
})
export class MedicDatesService {

  medicDate!: MedicDate;
  medicDates!: MedicDate[];

  constructor(
    private http: HttpClient
  ) { }

  getMedicDates(): Promise<MedicDate[]> {
    return new Promise((accept, reject) => {
      const URL = 'http://localhost:8000/medics-dates';
      this.http.get(URL).subscribe(
        (data: any) => {
          this.medicDates = data;
          if (this.medicDates) {
            accept(this.medicDates);
          }
        },
        error => reject(error)
      )
    })
  }

  createMedicDate(data: any) {
    return new Promise((accept, reject) => {
      const URL = 'http://localhost:8000/medics-dates';
      const headers = new HttpHeaders({
        'content-type': 'application/json'
      })
      const options = {headers: headers}
      this.http.post(URL, data, options).subscribe(
        (data: any) => {
          accept(data);
        },
        error => reject(error)
      )
    })
  }
}
