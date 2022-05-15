import { Component, OnInit } from '@angular/core';

export interface Patient {
  name: string;
  lastname: string;
  rut: string;
  patology: string;
}

const ELEMENT_DATA: Patient[] = [
  {name: 'Pedro', lastname: 'Pérez', rut: '19209321-1', patology: 'Progeria'},
  {name: 'Juan', lastname: 'Dagoberto', rut:'19209321-1', patology: 'Covid remake'},
  {name: 'Diego', lastname: 'Ormzabal', rut: '19209321-1', patology: 'Tos crónica'},
  {name: 'Karen', lastname: 'Azamendi', rut: '19209321-1', patology: 'Exceso de belleza'},
  {name: 'Gon', lastname: 'Freecs', rut: '19209321-1', patology: 'Se quemó con nen'},
  {name: 'Orochimaru', lastname: '???', rut: '19209321-1', patology: 'Lo tajearon'},
  {name: 'Gumball', lastname: 'Andersen', rut: '19209321-1', patology: 'Hipotermia'},
  {name: 'Jake', lastname: 'el Perro', rut: '19209321-1', patology: 'Contractura'},
  {name: 'Kaori', lastname: 'Miyazono', rut: '19209321-1', patology: 'Enfermedad F'},
  {name: 'Hatsune', lastname: 'Miku', rut: '19209321-1', patology: 'Sendos temazos'},
];

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lastname', 'rut', 'patology'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
