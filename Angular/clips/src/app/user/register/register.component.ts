import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('');
  age = new FormControl('');
  password = new FormControl('');
  repass = new FormControl('');
  phoneNumber = new FormControl('');

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    repass: this.repass,
    phoneNumber: this.phoneNumber,
  });
}
