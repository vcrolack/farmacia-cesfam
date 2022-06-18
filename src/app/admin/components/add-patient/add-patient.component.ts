import { Component, OnInit } from '@angular/core';
import { faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  faArrowLeft: IconDefinition = faArrowLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
