import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { Medicament } from 'src/app/core/models/medicament';
import { TypeMedicament } from 'src/app/core/models/typeMedicament';

import { TypeMedicamentService } from 'src/app/services/type-medicament.service';

@Component({
  selector: 'app-add-medicament',
  templateUrl: './add-medicament.component.html',
  styleUrls: ['./add-medicament.component.scss']
})
export class AddMedicamentComponent implements OnInit {

  faArrowLeft: IconDefinition = faArrowLeft;

  form = this.fb.group({
    name: [null, Validators.required],
    grammage: [null, Validators.required],
    stock:  [null, Validators.required],
    format_medicament: [null, Validators.required],
    type_medicament_id: [null, Validators.required],
    laboratory_name: [null, Validators.required],
    principal_agent: [null, Validators.required],
    secondary_agent: [null, Validators.required],
    caducity_date: [null, Validators.required]
  })

  typesMedicaments!: TypeMedicament[];

  constructor(
    private fb: FormBuilder,
    private typeMedicamentService: TypeMedicamentService
  ) { }

  async ngOnInit() {
    this.typesMedicaments = await this.typeMedicamentService.getTypesMedicaments();
    console.log(this.typesMedicaments)
  }

  onSubmit(data: any) {

  }

}
