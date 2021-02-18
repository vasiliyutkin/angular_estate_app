import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../services';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  scheduleForm: FormGroup;
  forgotForm: FormGroup;
  loading = false;
  scheduleFormSubmitted = false;
  forgotFormSubmited = false;
  forgotPassword = false;
  loginFormSubmitted = false;
  scheduleDemoMode = true;
  returnUrl: string;
  loginError = '';
  scheduleError = '';
  passwordNotification = '';
  meetingInfo = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.scheduleForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.forgotForm = this.formBuilder.group({
      username: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });

    this.returnUrl =
      this.route.snapshot.queryParams.returnUrl !== '/'
        ? this.route.snapshot.queryParams.returnUrl
        : '/dashboard';
  }

  get sf() {
    return this.scheduleForm.controls;
  }

  get lf() {
    return this.loginForm.controls;
  }

  get ff() {
    return this.forgotForm.controls;
  }

  get passwordsMatch(): boolean {
    return this.ff.newPassword.value === this.ff.confirmPassword.value;
  }

  resetPassword() {
    this.forgotFormSubmited = true;

    if (this.forgotForm.invalid || !this.passwordsMatch) {
      return;
    }

    this.authenticationService
      .resetPassword(this.ff.username.value, this.ff.newPassword.value)
      .pipe(first())
      .subscribe(
        (_) => {
          this.loginError = null;
          this.passwordNotification = 'Password successfully reset';
          this.forgotForm.reset();
          this.forgotPassword = false;
          setTimeout(() => {
            this.passwordNotification = null;
          }, 3000);
        },
        (err) => {
          this.loginError = err;
        }
      );
  }

  scheduleDemo() {
    this.scheduleFormSubmitted = true;

    if (this.scheduleForm.invalid) {
      return;
    }
    this.authenticationService
      .sendEmail(this.sf.email.value, this.sf.name.value, '', 'Meeting')
      .pipe(first())
      .subscribe((sent: boolean) => {
        if (sent) {
          this.scheduleError = null;
          this.meetingInfo = `Meeting for ${this.sf.name.value}: ${this.sf.email.value} was successfully scheduled!`;
          this.scheduleFormSubmitted = false;
          this.scheduleForm.reset();
          setTimeout(() => {
            this.meetingInfo = null;
            this.scheduleFormSubmitted = false;
          }, 3000);
        } else {
          this.meetingInfo = null;
          this.scheduleError = 'Meeting was not sceduled';
          setTimeout(() => {
            this.scheduleFormSubmitted = null;
          }, 3000);
        }
      });
  }

  login() {
    this.loginFormSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(this.lf.username.value, this.lf.password.value)
      .pipe(first())
      .subscribe(
        (_) => {
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          this.loginError = error;
          setTimeout(() => {
            this.loginError = null;
          }, 10000);
          this.loading = false;
        }
      );
  }
}
