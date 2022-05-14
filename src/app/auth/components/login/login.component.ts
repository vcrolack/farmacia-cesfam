import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      {type: "pattern", message: "El rut ingresado no es válido."}
    ],
    contrasena: [
      {type: "required", message: "La contraseña es obligatoria."},
      {type: "maxlength", message: "La contraseña debe de tener 30 caracteres máximo"},
      {type: "minlength", message: "La contraseña debe de tener 5 caracteres mínimo"}
    ]
  }

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({

      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),
      ])
      ),
      contrasena: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ])
      )
    })

  }

  ngOnInit(): void {
  }

  loginUser(data: any) {
    console.log('sesion iniciada')
  }

}
