import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Prescription } from 'src/app/core/models/prescription';
import { Patient } from 'src/app/core/models/patient';
import { Medicament } from 'src/app/core/models/medicament';

import { PrescriptionService } from 'src/app/services/prescription.service';
import { PatientService } from 'src/app/services/patient.service';
import { MedicamentService } from 'src/app/services/medicament.service';

import { faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-prescription-detail',
  templateUrl: './prescription-detail.component.html',
  styleUrls: ['./prescription-detail.component.scss']
})
export class PrescriptionDetailComponent implements OnInit {

  prescription!: Prescription;
  patient!: Patient;
  medicament!: Medicament;
  faArrowLeft: IconDefinition = faArrowLeft;

  constructor(
    private prescriptionService: PrescriptionService,
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService,
    private medicamentService: MedicamentService
  ) { }

  async ngOnInit() {
    await this.getPrescription(this.activatedRoute.snapshot.params['id']);
    await this.getPatient(this.activatedRoute.snapshot.params['rut']);
    await this.getMedicament(this.prescription.medicament_id);
    console.log(this.medicament)
  }

  async getPrescription(id: number) {
    this.prescription = await this.prescriptionService.getPrescription(id);
  }

  async getPatient(rut: string) {
    this.patient = await this.patientService.getPatient(rut);
  }

  async getMedicament(id: number) {
    this.medicament = await this.medicamentService.getMedicament(id);
  }

}
