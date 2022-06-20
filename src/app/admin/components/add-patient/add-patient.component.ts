import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { MatSnackBar } from '@angular/material/snack-bar';

import { faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  faArrowLeft: IconDefinition = faArrowLeft;
  pipe: DatePipe = new DatePipe('en-US');

  form = this.fb.group({
    first_name: [null, Validators.required],
    second_name: [null],
    last_name: [null, Validators.required],
    second_last_name: [null, Validators.required],
    rut: [null, Validators.required],
    email: [null, Validators.required],
    birth_date: [null, Validators.required],
    phone: [null, Validators.required],
    address: [null, Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(data: any) {
    data.birth_date = this.pipe.transform(data.birth_date, 'yyyy-MM-dd');
    console.log(data);
    this.patientService.createPatient(data).then(
      () => {
        this._snackBar.open('Paciente creado', 'cerrar');
        this.form.reset('');
        this.router.navigateByUrl("admin/patients");
      }
    )
    .catch(
      () => {
        this._snackBar.open('Ha ocurrido un error', 'cerrar');
      }
    )
  }

}
