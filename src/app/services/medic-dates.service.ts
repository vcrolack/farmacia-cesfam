import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
