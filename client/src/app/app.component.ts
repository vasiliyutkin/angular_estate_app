import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from './models/user';

@Component({
  selector: 'app-estate',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.socialAuthService.authState.subscribe((socialUserData: SocialUser) => {
      if (socialUserData) {
        const socialUser: User = new User();
        socialUser.socialToken = socialUserData.authToken;
        socialUser.socialProvider = socialUserData.provider;

        this.authService.login(socialUser).subscribe((res) => {
          if (!res.error) {
            this.router.navigate(['/']);
          }
        });
      }
    });
  }
}
