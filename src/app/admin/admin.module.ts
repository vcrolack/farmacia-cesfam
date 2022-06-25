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
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { AddMedicamentComponent } from './components/add-medicament/add-medicament.component';
import { EditMedicamentComponent } from './components/edit-medicament/edit-medicament.component';
import { MedicamentComponent } from './components/medicament/medicament.component';
import { PrescriptionDetailComponent } from './components/prescription-detail/prescription-detail.component';
import { EditPrescriptionComponent } from './components/edit-prescription/edit-prescription.component';
import { PrescriptionsSectionComponent } from './components/dashboard/components/prescriptions-section/prescriptions-section.component';
import { MedicDatesComponent } from './components/medic-dates/medic-dates.component';
import { AddMedicDateComponent } from './components/add-medic-date/add-medic-date.component';

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
    EditPatientComponent,
    PatientProfileComponent,
    AddMedicamentComponent,
    EditMedicamentComponent,
    MedicamentComponent,
    PrescriptionDetailComponent,
    EditPrescriptionComponent,
    PrescriptionsSectionComponent,
    MedicDatesComponent,
    AddMedicDateComponent,
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
