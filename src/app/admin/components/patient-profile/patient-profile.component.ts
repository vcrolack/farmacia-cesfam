import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faArrowLeft, faFileMedical, faPlus ,IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { Patient } from 'src/app/core/models/patient';
import { Prescription } from 'src/app/core/models/prescription';

import { PatientService } from 'src/app/services/patient.service';
import { PrescriptionService } from 'src/app/services/prescription.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent implements OnInit {

  faArrowLeft: IconDefinition = faArrowLeft;
  faFileMedical: IconDefinition = faFileMedical;
  faPlus: IconDefinition = faPlus;
  patient!: Patient;
  prescriptions!: Prescription[];


  constructor(
    private patientService: PatientService,
    private activatedRoute: ActivatedRoute,
    private prescriptionService: PrescriptionService
  ) {}

  async ngOnInit() {
    await this.getPatient(this.activatedRoute.snapshot.params['rut']);
    await this.getAllPrescriptions(this.patient.id);
    console.log(this.prescriptions)
  }

  async getPatient(rut: string) {
    this.patient = await this.patientService.getPatient(rut);
  }

  async getAllPrescriptions(patient_id: number) {
    this.prescriptions = await this.prescriptionService.getPrescriptionsByPatient(patient_id);
  }

  async deletePrescription(id: number) {
    this.prescriptionService.deletePrescription(id);
  }


}
