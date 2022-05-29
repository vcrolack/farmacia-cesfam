import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

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
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({

      rut: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(9)
      ])
      ),
      pass: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
      ])
      )
    })

  }

  ngOnInit(): void {
  }

  async loginUser(data: any) {
    
    await this.authService.loginUser(data)
    .then(
      res => {
        console.log(res)
        if (localStorage.getItem('isLogged') === 'true') {
          this.router.navigateByUrl('admin/dashboard')
        } else {
          console.log('no pasa nah')
        }
      }
    )
  }

}
