import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { Medicament } from 'src/app/core/models/medicament';
import { TypeMedicament } from 'src/app/core/models/typeMedicament';

import { TypeMedicamentService } from 'src/app/services/type-medicament.service';
import { MedicamentService } from 'src/app/services/medicament.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-medicament',
  templateUrl: './edit-medicament.component.html',
  styleUrls: ['./edit-medicament.component.scss']
})
export class EditMedicamentComponent implements OnInit {

  faArrowLeft: IconDefinition = faArrowLeft;
  pipe: DatePipe = new DatePipe('en-US');
  typesMedicaments!: TypeMedicament[];

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private typeMedicamentService: TypeMedicamentService,
    private medicamentService: MedicamentService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.typesMedicaments = await this.typeMedicamentService.getTypesMedicaments();

  }

  onSubmit(data: any) {
    data.caducity_date = this.pipe.transform(data.caducity_date, 'yyyy-MM-dd');
    this.medicamentService.updateMedicament(this.activatedRoute.snapshot.params['id'], data).then(
      () => {
        this._snackBar.open('Se ha editado el medicamento.', 'Cerrar');
        this.form.reset();
      }
    )
    .catch(
      () => this._snackBar.open('Ha ocurrido un error', 'Cerrar')
    )
  }

}
