import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  form = this.fb.group({
    firstName: [null, Validators.required],
    secondName: [null],
    lastName: [null, Validators.required],
    secondLastName: [null, Validators.required],
    rut: [null, Validators.required],
    password: [null, Validators.required],
    role: [null, Validators.required],
    email: [null, Validators.required],
    specialty: [null]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }

}
