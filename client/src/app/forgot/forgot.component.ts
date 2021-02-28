import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup;
  forgotFormSubmited = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      username: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
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
          this.forgotForm.reset();
          this.router.navigate(['/signin']);
        },
        (_) => {}
      );
  }
}
