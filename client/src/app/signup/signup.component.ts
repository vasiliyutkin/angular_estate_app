import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  registrationForm: FormGroup;
  registrationFormSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      password: ['', Validators.required],
      username: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
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
      .signUpUser({
        username: this.sf.username.value,
        password: this.sf.password.value,
      })
      .pipe(first())
      .subscribe((user: any) => {
        if (user) {
          this.registrationFormSubmitted = false;
          this.registrationForm.reset();
          this.router.navigate(['/signin']);
        }
      });
  }
}
