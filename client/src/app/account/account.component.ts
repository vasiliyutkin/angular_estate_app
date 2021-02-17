import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { AccountService } from '../services/account.service';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: 'account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  passwordForm: FormGroup;
  loading = false;
  passwordFormSubmitted = false;
  passwordError = '';
  passwordNotification = '';
  userData;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {}

  async ngOnInit() {

    const user: any = sessionStorage.getItem('user');
    this.userData = JSON.parse(user);
    this.passwordForm = this.formBuilder.group({
      currPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
  get pf(): { [key: string]: AbstractControl } {
    return this.passwordForm.controls;
  }

  get passwordsMatch(): boolean {
    return this.pf.newPassword.value === this.pf.confirmPassword.value;
  }

  updatePassword() {
    this.passwordFormSubmitted = true;

    if (this.passwordForm.invalid || !this.passwordsMatch) {
      return;
    }

    this.accountService
      .passwordChange(this.pf.currPassword.value, this.pf.newPassword.value , this.userData)
      .pipe(first())
      .subscribe(
        (_) => {
          this.passwordError = null;
          this.passwordNotification = 'Password successfully updated!';
          this.passwordForm.reset();
          this.passwordFormSubmitted = false;
          setTimeout(() => {
            this.passwordNotification = null;
          }, 3000);
        },
        (err) => {
          this.passwordError = err;
        }
      );
  }
}
