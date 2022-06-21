import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/dashboard/components/profile/profile.component';
import { PatientsComponent as PatientsDashboard } from './components/dashboard/components/patients/patients.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PrescriptionFormComponent } from './components/prescription-form/prescription-form.component';
import { StockComponent } from './components/stock/stock.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserService } from '../services/user.service';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UsersComponent } from './components/users/users.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    ProfileComponent,
    PatientsComponent,
    PatientsDashboard,
    PrescriptionFormComponent,
    StockComponent,
    AddUserComponent,
    EditUserComponent,
    UsersComponent,
    AddPatientComponent,
    EditPatientComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [UserService]
})
export class DashboardModule { }
