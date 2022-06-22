import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TypeMedicament } from '../core/models/typeMedicament';

@Injectable({
  providedIn: 'root'
})
export class TypeMedicamentService {

  typesMedicaments!: TypeMedicament[];

  constructor(
    private http: HttpClient
  ) { }

  getTypesMedicaments(): Promise<TypeMedicament[]> {
    return new Promise((accept, reject) => {
      const URL = 'http://localhost:8000/types-medicaments';
      this.http.get(URL).subscribe(
        (data: any) => {
          this.typesMedicaments = data;
          if (this.typesMedicaments) {
            accept(this.typesMedicaments)
          }
        },
        error => reject()
      )
    })
  }
}
