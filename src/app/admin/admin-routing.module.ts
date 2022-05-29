import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../auth/guards/login/login.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { PrescriptionFormComponent } from './components/prescription-form/prescription-form.component';
import { StockComponent } from './components/stock/stock.component';

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
        path: 'prescription',
        canActivate: [LoginGuard],
        component: PrescriptionFormComponent
      },
      {
        path: 'stock',
        canActivate: [LoginGuard],
        component: StockComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
