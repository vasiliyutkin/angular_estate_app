import { Component } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  innerWidth: number = window.innerWidth;

  constructor(private authService: AuthenticationService) {
    window.addEventListener('resize', (_) => {
      this.innerWidth = window.innerWidth;
    });
  }

  public get user(): User | SocialUser {
    return this.authService.userValue || this.authService.socialUserValue;
  }

  public get smallScreen(): boolean {
    return this.innerWidth < 768;
  }

  public get isAdmin(): boolean {
    return this.authService.isAdmin;
  }
}
