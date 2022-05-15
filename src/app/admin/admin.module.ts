import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/dashboard/components/profile/profile.component';
import { PatientsComponent } from './components/dashboard/components/patients/patients.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    ProfileComponent,
    PatientsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
