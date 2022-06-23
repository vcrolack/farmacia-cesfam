import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faCubes, faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { Medicament } from 'src/app/core/models/medicament';

import { MedicamentService } from 'src/app/services/medicament.service';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.scss']
})
export class MedicamentComponent implements OnInit {

  medicament!: Medicament;
  faCubes: IconDefinition = faCubes;
  faArrowLeft: IconDefinition = faArrowLeft;

  constructor(
    private medicamentService: MedicamentService,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    await this.getMedicament(this.activatedRoute.snapshot.params['id']);
    console.log(this.medicament)
  }

  async getMedicament(id: number) {
    this.medicament = await this.medicamentService.getMedicament(id);
  }

}
