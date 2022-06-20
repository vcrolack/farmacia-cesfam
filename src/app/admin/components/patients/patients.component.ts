import { Component, OnInit } from '@angular/core';
import { IconDefinition, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Patient } from 'src/app/core/models/patient';

import { PatientService } from 'src/app/services/patient.service';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  faPlus: IconDefinition = faPlus;
  patients!: Patient[];

  constructor(
    private patientService: PatientService
  ) { }

  async ngOnInit() {
    await this.getPatients();
    console.log(this.patients);
  }

  async getPatients() {
    this.patients = await this.patientService.getPatients();
    return this.patients;
  }

}
