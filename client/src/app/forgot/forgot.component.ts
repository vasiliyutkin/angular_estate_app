import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup;
  forgotFormSubmited = false;
  passwordNotification = '';

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      username: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
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
          this.passwordNotification = 'Password successfully reset';
          this.forgotForm.reset();
          setTimeout(() => {
            this.passwordNotification = null;
          }, 3000);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
