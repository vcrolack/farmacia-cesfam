import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

import { faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PatientService } from 'src/app/services/patient.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Patient } from 'src/app/core/models/patient';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {

  faArrowLeft: IconDefinition = faArrowLeft;
  patient!: Patient;
  pipe: DatePipe = new DatePipe('en-US')

  form = this.fb.group({
    first_name: [null, Validators.required],
    second_name: [null],
    last_name: [null, Validators.required],
    second_last_name: [null, Validators.required],
    email: [null, Validators.required],
    birth_date: [null, Validators.required],
    phone: [null, Validators.required],
    address: [null, Validators.required]
  })



  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    await this.getPatient(this.activatedRoute.snapshot.params['rut']);
  }

  onSubmit(data: any) {
    data.rut = this.activatedRoute.snapshot.params['rut'];
    data.birth_date = this.pipe.transform(data.birth_date, 'yyyy-MM-dd');
    this.patientService.updatePatient(this.activatedRoute.snapshot.params['rut'], data).then(
      () => {
        this._snackBar.open('Paciente editado', 'cerrar');
        this.form.reset();
      }
    )
    .catch(
      () => this._snackBar.open('Ha ocurrido un error', 'Cerrar')
    )
  }

  async getPatient(rut: string) {
    this.patient = await this.patientService.getPatient(rut);
  }

}
