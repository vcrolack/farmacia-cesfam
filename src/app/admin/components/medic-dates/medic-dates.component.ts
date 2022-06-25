import { Component, OnInit } from '@angular/core';

import { MedicDatesService } from 'src/app/services/medic-dates.service';
import { PatientService } from 'src/app/services/patient.service';
import { UserService } from 'src/app/services/user.service';

import { MedicDate, FullMedicDate } from 'src/app/core/models/medic-date';
import { Patient } from 'src/app/core/models/patient';

import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-medic-dates',
  templateUrl: './medic-dates.component.html',
  styleUrls: ['./medic-dates.component.scss']
})
export class MedicDatesComponent implements OnInit {

  medicDates!: MedicDate[];
  fullMedicDates!: FullMedicDate[]
  patients!: Patient[];

  faPlus: IconDefinition = faPlus;


  constructor(
    private medicDateService: MedicDatesService
  ) { }

  async ngOnInit() {
    await this.getMedicDates();
    console.log(this.fullMedicDates[0])
    console.log(this.fullMedicDates);
  }

  async getMedicDates() {
    this.fullMedicDates = await this.medicDateService.getMedicDates();
  }

  async getPatients() {

  }

  async deleteMedicDate(medic_date_id: number) {
    await this.medicDateService.deleteMedicDate(medic_date_id);
  }

}
