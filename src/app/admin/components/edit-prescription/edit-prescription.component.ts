import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Medicament } from 'src/app/core/models/medicament';
import { Patient } from 'src/app/core/models/patient';
import { User } from 'src/app/core/models/user';
import { TypeMedicament } from 'src/app/core/models/typeMedicament';

import { PrescriptionService } from 'src/app/services/prescription.service';
import { PatientService } from 'src/app/services/patient.service';
import { TypeMedicamentService } from 'src/app/services/type-medicament.service';
import { MedicamentService } from 'src/app/services/medicament.service';

import { MatSnackBar } from '@angular/material/snack-bar';

import { faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-prescription',
  templateUrl: './edit-prescription.component.html',
  styleUrls: ['./edit-prescription.component.scss']
})
export class EditPrescriptionComponent implements OnInit {

  userStorage: any = localStorage.getItem('user');
  pipe: DatePipe = new DatePipe('en-US');
  user!: User;
  patient!: Patient;
  typesMedicaments!: TypeMedicament[]
  medicaments!: Medicament[];
  medicamentSelected!: Medicament;

  faArrowLeft: IconDefinition = faArrowLeft;

  form = this.fb.group({
    patology: [null, Validators.required],
    date_prescription: [null, Validators.required],
    type_medicament_id: [null, Validators.required],
    medicament_id: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private prescriptionService: PrescriptionService,
    private medicamentService: MedicamentService,
    private typeMedicamentService: TypeMedicamentService,
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService,
    private _snackBar: MatSnackBar
  ) {}

  async ngOnInit() {
    this.user = JSON.parse(this.userStorage);
    this.typesMedicaments = await this.typeMedicamentService.getTypesMedicaments();
    this.patient = await this.patientService.getPatient(this.activatedRoute.snapshot.params['rut']);
    this.medicaments = await this.medicamentService.getMedicaments();
    console.log(this.patient)
  }

  onSubmit(data: any){
    data.date_prescription = this.pipe.transform(data.date_prescription, 'yyyy-MM-dd');
    data.user_id = this.user.id;
    data.patient_id = this.patient.id;
    data.medic_name = this.user.first_name + ' ' + this.user.last_name;
    data.medicament_id = parseInt(data.medicament_id);
    data.type_medicament_id = parseInt(data.type_medicament_id);
    console.log(data)
    this.getMedicament(data.medicament_id)
    .then(
      () => {
        data.medicament_name = this.medicamentSelected.name + ' ' + this.medicamentSelected.laboratory_name;
        console.log(data)
        setTimeout(() => {
          this.updatePrescription(this.activatedRoute.snapshot.params['id'], data);
        }, 3000)
      }
    )
    .catch(
      () => this._snackBar.open('Ha ocurrido un error', 'Cerrar')
    )

  }

  async getMedicament(id: number) {
    this.medicamentSelected = await this.medicamentService.getMedicament(id);
  }

  async updatePrescription(id: number, data: any) {
    await this.prescriptionService.updatePrescription(id, data).then(
      () => {
        this._snackBar.open(`Se ha editado la prescripción para ${this.patient.first_name} ${this.patient.last_name}`, 'Cerrar' )
        this.form.reset();
      }
    )
    .catch(
      () => this._snackBar.open('Ha ocurrido un error', 'Cerrar')
    )
  }

}
