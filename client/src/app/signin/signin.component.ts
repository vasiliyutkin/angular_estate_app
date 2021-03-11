import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    public toasterService: ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: ['', Validators.required],
    });
  }

  login() {
    const user: User = new User();
    user.username = this.loginForm.get('username').value;
    user.password = this.loginForm.get('password').value;

    this.authenticationService.login(user).subscribe((res) => {
      if (!res.error) {
        this.toasterService.show(`Вы вошли в систему`);
        this.router.navigate(['/']);
      }
    });
  }

  signInWithGoogle(): void {
    this.authenticationService.signInWithGoogle();
  }

  signInWithFB(): void {
    this.authenticationService.signInWithFB();
  }

  signInWithVK(): void {
    this.authenticationService.signInWithVK();
  }

  public get isVkAvailable(): boolean {
    return this.authenticationService.isVkAvailable;
  }
}
