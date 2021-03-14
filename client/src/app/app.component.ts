import { Component } from '@angular/core';
import { SpinnerType } from './component_library/spinner/spinner.type.enum';

import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estate',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  spinnerType: SpinnerType = SpinnerType.Modern;

  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router
  ) {
    this.socialAuthService.authState.subscribe((socialUser: SocialUser) =>
      socialUser
        ? this.router.navigate(['/'])
        : this.router.navigate(['/signin'])
    );
  }
}
