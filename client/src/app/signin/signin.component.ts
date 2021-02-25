import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  loginFormSubmitted = false;
  loginError = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get lf() {
    return this.loginForm.controls;
  }
  login() {
    this.loginFormSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService
      .login(this.lf.username.value, this.lf.password.value)
      .pipe(first())
      .subscribe(
        (_) => {
          this.router.navigate(['/']);
        },
        (error) => {
          this.loginError = error;
          setTimeout(() => {
            this.loginError = null;
          }, 5000);
        }
      );
  }
}
