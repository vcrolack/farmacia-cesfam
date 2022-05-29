import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

//Services
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  form = this.fb.group({
    first_name: [null, Validators.required],
    second_name: [null],
    last_name: [null, Validators.required],
    second_last_name: [null, Validators.required],
    rut: [null, Validators.required],
    password: [null, Validators.required],
    role_id: [null, Validators.required],
    email: [null, Validators.required],
    specialty_id: [null]
  });

  specialties: any[] = [
    {id: "1", name: 'Cardiologo'},
    {id: "2", name: 'General'}
  ]
  

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar 
  ) {}

  onSubmit(data: any) {
    data.role_id = parseInt(data.role_id)
    data.specialty_id = parseInt(data.specialty_id)
    console.log(typeof(data))
    this.userService.postUser(data).then(
      () => {
        this._snackBar.open('Usuario creado.', 'Cerrar')
        this.form.reset()
      }
    )
    .catch(
      () => {
        this._snackBar.open('Ha ocurrido un error!', 'Cerrar')
      }
    )
  }

}
