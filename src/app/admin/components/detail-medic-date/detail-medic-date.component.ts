import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Patient } from 'src/app/core/models/patient';
import { User } from 'src/app/core/models/user';
import { MedicDate } from 'src/app/core/models/medic-date';

import { PatientService } from 'src/app/services/patient.service';
import { MedicDatesService } from 'src/app/services/medic-dates.service';

import { faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detail-medic-date',
  templateUrl: './detail-medic-date.component.html',
  styleUrls: ['./detail-medic-date.component.scss']
})
export class DetailMedicDateComponent implements OnInit {

  userStorage: any = localStorage.getItem('user');
  faArrowLeft: IconDefinition = faArrowLeft;
  user!: User;
  patient!: Patient;
  medicDate!: MedicDate;


  constructor(
    private patientService: PatientService,
    private medicDatesService: MedicDatesService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.user = JSON.parse(this.userStorage);
    await this.getMedicDate(this.activatedRoute.snapshot.params['id']).then(
      () => {
        this.getPatient(this.medicDate.patient_id);
      }
    )
    .catch(
      () => this._snackBar.open('Ha ocurrido un error', 'Cerrar')
    )
  }

  async getMedicDate(medic_date_id: number) {
    this.medicDate = await this.medicDatesService.getMedicDate(medic_date_id);
  }

  async getPatient(patient_id: number) {
    this.patient = await this.patientService.getPatientById(patient_id);
  }


}
