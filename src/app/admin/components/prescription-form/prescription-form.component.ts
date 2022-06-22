import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Medicament } from 'src/app/core/models/medicament';
import { Patient } from 'src/app/core/models/patient';
import { User } from 'src/app/core/models/user';
import { TypeMedicament } from 'src/app/core/models/typeMedicament';

import { PrescriptionService } from 'src/app/services/prescription.service';
import { PatientService } from 'src/app/services/patient.service';
import { TypeMedicamentService } from 'src/app/services/type-medicament.service';

@Component({
  selector: 'app-prescription-form',
  templateUrl: './prescription-form.component.html',
  styleUrls: ['./prescription-form.component.scss']
})
export class PrescriptionFormComponent implements OnInit {

  userStorage: any = localStorage.getItem('user');
  user!: User;
  patient!: Patient;
  typesMedicaments!: TypeMedicament[]

  medicaments: Medicament[] = [
    {
      "id": 1,
      "name": "ibuprofeno nacional",
      grammage: 400,
      stock: 100,
      format_medicament: "Comprimidos",
      type_medicament_id: 2,
      laboratory_name: "Pfizer",
      principal_agent: "ibuprofeno",
      secondary_agent: "aspirina",
      caducity_date: "2002-02-20"
    },
    {
      id: 2,
      name: "paracetamol nacional",
      grammage: 400,
      stock: 100,
      format_medicament: "Comprimidos",
      type_medicament_id: 2,
      laboratory_name: "Pfizer",
      principal_agent: "paracetamol",
      secondary_agent: "aspirina",
      caducity_date: "2001-06-20"
    },
  ]

  form = this.fb.group({
    patology: [null, Validators.required],
    prescription_date: [null, Validators.required],
    type_medicament_id: [null, Validators.required],
    medicament: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private prescriptionService: PrescriptionService,
    private typeMedicamentService: TypeMedicamentService,
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService
  ) {}

  async ngOnInit() {
    this.user = JSON.parse(this.userStorage);
    this.typesMedicaments = await this.typeMedicamentService.getTypesMedicaments();
    console.log(this.typesMedicaments);
    this.patient = await this.patientService.getPatient(this.activatedRoute.snapshot.params['rut']);
  }

  onSubmit(data: any){
    console.log(data)
  }



}
