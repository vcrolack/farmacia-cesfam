import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-prescription-form',
  templateUrl: './prescription-form.component.html',
  styleUrls: ['./prescription-form.component.scss']
})
export class PrescriptionFormComponent {

  form = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    secondName: [null],
    lastName: [null, Validators.required],
    secondLastName: [null, Validators.required],
    patology: [null, Validators.required],
    address: [null, Validators.required],
    phone: [null, Validators.required],
    email: [null, Validators.required],
    medicament: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }

}
