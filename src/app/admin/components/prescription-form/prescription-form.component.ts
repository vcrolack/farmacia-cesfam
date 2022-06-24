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

@Component({
  selector: 'app-prescription-form',
  templateUrl: './prescription-form.component.html',
  styleUrls: ['./prescription-form.component.scss']
})
export class PrescriptionFormComponent implements OnInit {

  userStorage: any = localStorage.getItem('user');
  pipe: DatePipe = new DatePipe('en-US');
  user!: User;
  patient!: Patient;
  typesMedicaments!: TypeMedicament[]
  medicaments!: Medicament[];
  medicamentSelected!: Medicament;

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
    this.getMedicament(data.medicament_id).then(
      () => {
        if (this.medicamentSelected.stock > 0) {
          this.medicamentSelected.stock = this.medicamentSelected.stock - 1;
          this.updateStock(this.medicamentSelected.id, this.medicamentSelected)
          data.medicament_name = this.medicamentSelected.name + ' ' + this.medicamentSelected.laboratory_name;
          console.log(data)
        } else {
          this._snackBar.open('No queda stock para este medicamento', 'Cerrar');
        }
      }
    )
    .then(
      () => {
        setTimeout(() => {
          this.createPrescription(data);
        }, 3000)
      }
    )
    // emit prescription

  }

  async getMedicament(id: number) {
    this.medicamentSelected = await this.medicamentService.getMedicament(id);
  }
  async updateStock(id: number, medicament: Medicament) {
    await this.medicamentService.updateMedicament(id, medicament);
  }

  async createPrescription(data: any) {
    await this.prescriptionService.createPrescription(data).then(
      () => {
        this._snackBar.open(`Se ha creado la prescripción para ${this.patient.first_name} ${this.patient.last_name}`, 'Cerrar' )
        this.form.reset();
      }
    )
    .catch(
      () => this._snackBar.open('Ha ocurrido un error', 'Cerrar')
    )
  }

}
