import { Component, OnInit } from '@angular/core';

import { Prescription } from 'src/app/core/models/prescription';

import { PrescriptionService } from 'src/app/services/prescription.service';

@Component({
  selector: 'app-prescriptions-section',
  templateUrl: './prescriptions-section.component.html',
  styleUrls: ['./prescriptions-section.component.scss']
})
export class PrescriptionsSectionComponent implements OnInit {

  prescriptions!: Prescription[];

  constructor(
    private prescriptionService: PrescriptionService
  ) { }

  async ngOnInit() {
    setTimeout(() => {
      this.getAllPrescriptions();
    }, 1500);
  }

  async getAllPrescriptions() {
    this.prescriptions = await this.prescriptionService.getPrescriptions();
  }

}
