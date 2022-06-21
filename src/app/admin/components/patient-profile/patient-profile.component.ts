import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faArrowLeft, faFileMedical ,IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { Patient } from 'src/app/core/models/patient';

import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent implements OnInit {

  faArrowLeft: IconDefinition = faArrowLeft;
  faFileMedical: IconDefinition = faFileMedical;
  patient!: Patient;


  constructor(
    private patientService: PatientService,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    await this.getPatient(this.activatedRoute.snapshot.params['rut']);
    console.log(this.patient)
  }

  async getPatient(rut: string) {
    this.patient = await this.patientService.getPatient(rut);
  }

}
