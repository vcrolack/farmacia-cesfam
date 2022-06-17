import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { UserService } from 'src/app/services/user.service';
import { SpecialtyService } from 'src/app/services/specialty.service';
import { Specialty } from 'src/app/core/models/specialty';
import { User } from 'src/app/core/models/user';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  form = this.fb.group({
    first_name: [null, Validators.required],
    second_name: [null],
    last_name: [null, Validators.required],
    second_last_name: [null, Validators.required],
    role_id: [null, Validators.required],
    email: [null, Validators.required],
    specialty_id: [null]
  })

  specialties!: Specialty[];
  user!: User;

  faArrowLeft: IconDefinition = faArrowLeft;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private specialtyService: SpecialtyService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    await this.getSpecialties();
    await this.getUser(this.activatedRoute.snapshot.params['rut'])
  }

  onSubmit(data: any) {
    data.role_id = parseInt(data.role_id);
    data.rut = this.activatedRoute.snapshot.params['rut'];
    if (data.specialty_id) {
      data.specialty_id = parseInt(data.specialty_id);
    }

    console.log(data)
    this.userService.updateUser(this.activatedRoute.snapshot.params['rut'], data).then(
      () => {
        this._snackBar.open('Usuario editado.', 'Cerrar');
        this.form.reset();
      }
    )
    .catch(
      () => {
        this._snackBar.open('Ha ocurrido un error!', 'Cerrar');
      }
    )
  }

  async getSpecialties() {
    this.specialties = await this.specialtyService.getSpecialties();
    console.log(this.specialties)
    return this.specialties;
  }

  async getUser(rut: string) {
    this.user = await this.userService.getUser(rut);
  }

  async updaUser (rut: string, data: any) {

  }

}
