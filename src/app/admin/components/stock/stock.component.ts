import { Component, OnInit} from '@angular/core';

import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { Medicament } from 'src/app/core/models/medicament';

import { MedicamentService } from 'src/app/services/medicament.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  faPlus: IconDefinition = faPlus;
  medicaments!: Medicament[];

  constructor(
    private medicamentService: MedicamentService
  ) {
  }

  async ngOnInit() {
    await this.getAllMedicaments();
    console.log(this.medicaments)
  }

  async getAllMedicaments() {
    this.medicaments = await this.medicamentService.getMedicaments();
    return this.medicaments;
  }

  async deleteMedicament(id: number) {
    console.log(id)
    await this.medicamentService.deleteMedicament(id)
  }

}
