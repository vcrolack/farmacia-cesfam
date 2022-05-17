import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/dashboard/components/profile/profile.component';
import { PatientsComponent } from './components/dashboard/components/patients/patients.component';
import { PrescriptionFormComponent } from './components/prescription-form/prescription-form.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    ProfileComponent,
    PatientsComponent,
    PrescriptionFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
