import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Specialty } from '../core/models/specialty';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  specialties!: Specialty[];
  specialty!: Specialty;

  constructor(
    private http: HttpClient
  ) { }

    getSpecialties(): Promise<Specialty[]> {
      return new Promise((accept, reject) => {
        const URL = 'http://localhost:8000/specialties';
        this.http.get(URL).subscribe(
          (data: any) => {
            this.specialties = data;
            if (this.specialties) {
              accept(this.specialties)
            }
          },
          error => reject()
        )
      })
    }

    getSpecialty(id: number) {
      return new Promise((accept, reject) => {
        const URL = `http://localhost:8000/specialties/${id}`;
        this.http.get(URL).subscribe(
          (data: any) => {
            this.specialty = data;
            if (this.specialty) {
              accept(this.specialty);
            }
          },
          error => reject()
        )
      })
    }

}
