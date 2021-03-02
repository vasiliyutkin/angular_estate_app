import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(
    private authService: AuthenticationService,
    private toastrService: ToastrService
  ) {}

  public get loggedIn(): boolean {
    return this.authService.loggedIn;
  }

  logout(): void {
    this.authService
      .logout()
      .then((_) => this.toastrService.show('Вы вышли из системы...'));
  }
}
