import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { faCircleRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'profile', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Profile', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  card2: any[] = [
    {
      title: "Formulario de atención",
      description: "Completa el formulario con los datos del paciente."
    },
    {
      title: "Prescripción de medicamentos",
      description: "Registrar la información relacionada a la   prescripción de medicamentos otorgada por el profesional de salud."
    },
    {
      title: "Consulta de stock",
      description: "Visualiza en tiempo real el stock disponible de distintos medicamentos guardados en el almacén de la farmacia."
    },
    {
      title: "Reserva de medicamentos",
      description: "Generar reserva de medicamentos para el paciente y la agenda la entrega."
    },
    {
      title: "Contacto de pacientes",
      description: "Activar el servicio de mensajería para el paciente (email y/o Whatsapp)."
    },
    {
      title: "Soporte",
      description: "Servicio de soporte en caso de problemas con el servicio o consultas."
    }
  ]
 
  faCircleRight: IconDefinition = faCircleRight;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
  }

}
