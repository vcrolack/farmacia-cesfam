import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

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

  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  matcher = new MyErrorStateMatcher();

  specialties: any[] = [
    {id: 1, name: 'Cardiologo'},
    {id: 2, name: 'General'}
  ]
  

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }

}
