import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../auth/guards/login/login.guard';
import { AddMedicamentComponent } from './components/add-medicament/add-medicament.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditMedicamentComponent } from './components/edit-medicament/edit-medicament.component';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { MedicamentComponent } from './components/medicament/medicament.component';
import { NavComponent } from './components/nav/nav.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PrescriptionFormComponent } from './components/prescription-form/prescription-form.component';
import  {StockComponent} from './components/stock/stock.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [LoginGuard],
        component: DashboardComponent
      },
      {
        path: 'add-prescription/:rut',
        canActivate: [LoginGuard],
        component: PrescriptionFormComponent
      },
      {
        path: 'users',
        canActivate: [LoginGuard],
        component: UsersComponent
      },
      {
        path: 'add-user',
        canActivate: [LoginGuard],
        component: AddUserComponent
      },
      {
        path: 'edit-user/:rut',
        canActivate: [LoginGuard],
        component: EditUserComponent
      },
      {
        path: 'patients',
        canActivate: [LoginGuard],
        component: PatientsComponent
      },
      {
        path: 'add-patient',
        canActivate: [LoginGuard],
        component: AddPatientComponent
      },
      {
        path: 'edit-patient/:rut',
        canActivate: [LoginGuard],
        component: EditPatientComponent
      },
      {
        path: 'patient-profile/:rut',
        canActivate: [LoginGuard],
        component: PatientProfileComponent
      },
      {
        path: 'stock',
        canActivate: [LoginGuard],
        component: StockComponent
      },
      {
        path: 'add-medicament',
        canActivate: [LoginGuard],
        component: AddMedicamentComponent
      },
      {
        path: 'edit-medicament/:id',
        canActivate: [LoginGuard],
        component: EditMedicamentComponent
      },
      {
        path: 'medicament/:id',
        canActivate: [LoginGuard],
        component:MedicamentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
