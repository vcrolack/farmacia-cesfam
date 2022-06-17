import { Component, OnInit } from '@angular/core';
import { IconDefinition, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  faPlus: IconDefinition = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
