import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(
    private authService: AuthenticationService,
    private toastrService: ToastrService,
    private translateService: TranslateService
  ) {
    setTimeout(() => this.translateService.use('ua'), 5000);
    setTimeout(() => this.translateService.use('ru'), 10000);
  }

  public get loggedIn(): boolean {
    return this.authService.loggedIn;
  }

  public get isAdmin(): boolean {
    return this.loggedIn && this.authService.isAdmin;
  }

  logout(): void {
    this.authService
      .logout()
      .then((_) => this.toastrService.show('Вы вышли из системы...'));
  }
}
