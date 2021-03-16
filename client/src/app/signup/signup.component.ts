import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';

import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  registrationForm: FormGroup;

  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.Ukraine,
    CountryISO.Russia,
    CountryISO.Turkey,
  ];

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    public toasterService: ToastrService
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      username: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobile: ['', Validators.required],
    });
  }

  signUp(): void {
    const user: User = new User();
    user.username = this.registrationForm.get('username').value;
    user.password = this.registrationForm.get('password').value;
    user.firstname = this.registrationForm.get('firstname').value;
    user.lastname = this.registrationForm.get('lastname').value;
    user.mobile = this.registrationForm.get('mobile').value;

    this.authenticationService.signUpUser(user).subscribe((response) => {
      if (!response.error) {
        this.toasterService.show(
          'Please check your email for further instructions on how to complete your account setup.'
        );
        this.router.navigate(['/signin']);
      }
    });
  }
}
