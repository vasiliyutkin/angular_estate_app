import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private authService: AuthenticationService) {}

  public get loggedIn(): boolean {
    return this.authService.loggedIn;
  }

  logout(): void {
    this.authService.logout();
  }
}
