import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { TranslationService } from 'src/app/services/translation.service';

import {
  enTranslationCode,
  ruTranslationCode,
  ukTranslationCode,
} from 'src/app/services/translation.constants';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  enTranslationCode = enTranslationCode;
  ruTranslationCode = ruTranslationCode;
  ukTranslationCode = ukTranslationCode;

  constructor(
    private authService: AuthenticationService,
    private toastrService: ToastrService,
    private translationService: TranslationService
  ) {}

  public get loggedIn(): boolean {
    return this.authService.loggedIn;
  }

  public get isAdmin(): boolean {
    return this.loggedIn && this.authService.isAdmin;
  }

  shouldDisableLang(lang: string): boolean {
    return this.translationService.isLangSelected(lang);
  }

  changeLang(lang: string): void {
    this.translationService.changeLang(lang);
  }

  logout(): void {
    this.authService
      .logout()
      .then((_) => this.toastrService.show('Вы вышли из системы...'));
    // this is how to dynamically handle translations in angular code
    /*       this.translateService
        .get('dashboard.heading')
        .subscribe((message) => this.toastrService.show(message)); */
  }
}
