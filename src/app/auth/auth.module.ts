import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './services/auth/auth.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
