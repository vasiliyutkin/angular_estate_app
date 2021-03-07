import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { tap } from 'rxjs/operators';
import { User } from '../models/user';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    public toasterService: ToastrService
  ) {}

  ngOnInit() {
    this.forgotForm = this.formBuilder.group(
      {
        username: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        password: ['', Validators.required, passwordValidator],
        confirmPassword: ['', Validators.required, confirmPasswordValidator],
      },
      { updateOn: 'blur' }
    );
  }

  resetPassword() {
    const user: User = new User();
    user.username = this.forgotForm.get('username').value;
    user.password = this.forgotForm.get('password').value;

    this.authenticationService.resetPassword(user).subscribe((_) => {
      this.toasterService.show('Ваш пароль восстановлен...');
      this.router.navigate(['/signin']);
    });
  }
}

function passwordValidator(control: AbstractControl) {
  const passValue = control.value;
  const passConfirmControl: AbstractControl = control.root.get(
    'confirmPassword'
  );
  const passConfirmValue = passConfirmControl.value;

  if (passValue !== passConfirmValue) {
    passConfirmControl.setErrors({
      passwordMatchError: true,
    });
  } else {
    passConfirmControl.setErrors(null);
  }

  return Promise.resolve(null);
}

function confirmPasswordValidator(control: AbstractControl) {
  const passConfirmValue = control.value;
  const passValue = control.root.get('password').value;

  return Promise.resolve(
    passValue !== passConfirmValue
      ? {
          passwordMatchError: passValue !== passConfirmValue,
        }
      : {}
  );
}
