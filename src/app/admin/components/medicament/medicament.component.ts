import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { faCubes, faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { Medicament } from 'src/app/core/models/medicament';

import { MedicamentService } from 'src/app/services/medicament.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.scss']
})
export class MedicamentComponent implements OnInit {

  medicament!: Medicament;
  faCubes: IconDefinition = faCubes;
  faArrowLeft: IconDefinition = faArrowLeft;

  form = this.fb.group({
    stock: [null, Validators.required]
  })

  constructor(
    private medicamentService: MedicamentService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  onSubmit(data: any) {
    data.name = this.medicament.name;
    data.grammage = this.medicament.grammage;
    data.stock = data.stock;
    data.format_medicament = this.medicament.format_medicament;
    data.type_medicament_id = this.medicament.type_medicament_id;
    data.laboratory_name = this.medicament.laboratory_name;
    data.principal_agent = this.medicament.principal_agent;
    data.secondary_agent = this.medicament.secondary_agent;
    data.caducity_date = this.medicament.caducity_date;

    this.medicamentService.updateMedicament(this.activatedRoute.snapshot.params['id'], data).then(
      () => {
        this._snackBar.open('Se ha actualizado stock', 'Cerrar');
        this.form.reset();
      }
    )
    .catch(
      () => this._snackBar.open('Ha ocurrido un error.', 'Cerrar')
    )
  }

  async ngOnInit() {
    await this.getMedicament(this.activatedRoute.snapshot.params['id']);
    console.log(this.medicament)
  }

  async getMedicament(id: number) {
    this.medicament = await this.medicamentService.getMedicament(id);
  }

}
