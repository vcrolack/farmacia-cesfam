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
  selector: 'app-add-medic-date',
  templateUrl: './add-medic-date.component.html',
  styleUrls: ['./add-medic-date.component.scss']
})
export class AddMedicDateComponent implements OnInit {

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
    this.createMedicDate(data).then(
      () => {
        this._snackBar.open('Fecha reservada.', 'Cerrar');
        this.form.reset()
      }
    )
    .catch(
      () => this._snackBar.open('Ha ocurrido un error', 'Cerrar')
    )
  }

  async createMedicDate(data:any) {
    await this.medicDatesService.createMedicDate(data);
  }

  async getPatientById(patient_id: number) {
    this.patient = await this.patientService.getPatientById(patient_id);
  }

}
