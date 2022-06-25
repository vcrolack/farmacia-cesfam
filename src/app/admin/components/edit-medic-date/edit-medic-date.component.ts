import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { MedicDate } from 'src/app/core/models/medic-date';
import { Patient } from 'src/app/core/models/patient';
import { User } from 'src/app/core/models/user';

import { MedicDatesService } from 'src/app/services/medic-dates.service';
import { PatientService } from 'src/app/services/patient.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-medic-date',
  templateUrl: './edit-medic-date.component.html',
  styleUrls: ['./edit-medic-date.component.scss']
})
export class EditMedicDateComponent implements OnInit {

  faArrowLeft: IconDefinition = faArrowLeft;
  userStorage: any = localStorage.getItem('user');
  patient!: Patient;
  user!: User

  form = this.fb.group({
    medic_date: [null, Validators.required],
    observations: [null]
  })

  constructor(
    private fb: FormBuilder,
    private medicDatesService: MedicDatesService,
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService,
    private _snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.user = JSON.parse(this.userStorage);
    await this.getPatientById(this.activatedRoute.snapshot.params['id'])
    console.log(this.patient)
  }

  onSubmit(data: any) {
    data.user_id = this.user.id;
    data.patient_id = this.patient.id;
    this.updateMedicDate(this.activatedRoute.snapshot.params['id'], data).then(
      () => {
        this._snackBar.open('Fecha de reserva editada.', 'Cerrar');
        this.form.reset()
      }
    )
    .catch(
      () => this._snackBar.open('Ha ocurrido un error', 'Cerrar')
    )
  }

  async updateMedicDate(medic_date_id: number, data:any) {
    await this.medicDatesService.updateMedicDate(medic_date_id, data);
  }

  async getPatientById(patient_id: number) {
    this.patient = await this.patientService.getPatientById(patient_id);
  }

}
