import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../services/auth/auth.service';
import { User } from 'src/app/core/models/user';
import { LoginModel } from 'src/app/core/models/loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user!: User;

  mensajesErrores = {
    email: [
      {type: "required", message: "El rut es obligatorio."},
      {type: "minlength", message: "El rut debe tener un largo de 8 a 9 caracteres"},
      {type: "maxlength", message: "El rut debe tener un largo de 8 a 9 caracteres"}
    ],
    contrasena: [
      {type: "required", message: "La contraseña es obligatoria."},
      {type: "maxlength", message: "La contraseña debe de tener 30 caracteres máximo"},
      {type: "minlength", message: "La contraseña debe de tener 5 caracteres mínimo"}
    ]
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.loginForm = this.formBuilder.group({

      rut: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(9)
      ])
      ),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
      ])
      )
    })

  }

  ngOnInit(): void {
  }

  async loginUser(data: LoginModel) {
    console.log(data)

    await this.authService.loginUser(data)
    .then(
      (res: any) => {
        localStorage.setItem('isLogged', 'true');
        let user: User = {
          id: res.id,
          first_name: res.first_name,
          second_name: res.second_name,
          last_name: res.last_name,
          second_last_name: res.second_last_name,
          specialty_id: res.specialty_id,
          role_id: res.role_id,
          rut: res.rut,
          email: res.email
        }
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl("/admin/dashboard");
      }
    )
    .catch(
      () => {
        this.loginForm.reset();
        this._snackBar.open('Rut o contraseña incorrecta.', 'Cerrar');
      }
    )
  }

}
