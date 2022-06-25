import { Component, OnInit } from '@angular/core';

import { MedicDatesService } from 'src/app/services/medic-dates.service';

import { MedicDate } from 'src/app/core/models/medic-date';


@Component({
  selector: 'app-medic-date-section',
  templateUrl: './medic-date-section.component.html',
  styleUrls: ['./medic-date-section.component.scss']
})
export class MedicDateSectionComponent implements OnInit {

  medicDates!: MedicDate[];

  constructor(
    private medicDateService: MedicDatesService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.getMedicDates();
      console.log(this.medicDates);

    }, 3000)
  }

  async getMedicDates() {
    //this.medicDates = await this.medicDateService.getMedicDates();
  }

  async getPatients() {

  }

  async deleteMedicDate(medic_date_id: number) {
    await this.medicDateService.deleteMedicDate(medic_date_id);
  }

}
