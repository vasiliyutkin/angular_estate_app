import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  registrationForm: FormGroup;
  signupError = '';
  registrationFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  get sf() {
    return this.registrationForm.controls;
  }

  signUp() {
    this.registrationFormSubmitted = true;

    if (this.registrationForm.invalid) {
      return;
    }
    this.authenticationService
      .sendEmail(this.sf.email.value, this.sf.name.value, '', 'Meeting')
      .pipe(first())
      .subscribe((sent: boolean) => {
        if (sent) {
          this.signupError = null;
          this.registrationFormSubmitted = false;
          this.registrationForm.reset();
        } else {
          this.signupError = 'Registration failed';
          setTimeout(() => {
            this.registrationFormSubmitted = null;
          }, 3000);
        }
      });
  }
}
