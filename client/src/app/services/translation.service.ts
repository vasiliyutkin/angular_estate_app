import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

import {
  translationTokenName,
  enTranslationCode,
} from './translation.constants';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private translationSubject: BehaviorSubject<string>;

  constructor(private translateService: TranslateService) {
    this.translationSubject = new BehaviorSubject<string>(
      this.getCurrentTranslation()
    );
  }

  public get translationValue(): string {
    return this.translationSubject.value;
  }

  getCurrentTranslation(): string {
    return (
      JSON.parse(localStorage.getItem(translationTokenName)) ||
      enTranslationCode
    );
  }

  initializeLang(): void {
    this.translateService.setDefaultLang(this.getCurrentTranslation());
  }

  isLangSelected(lang: string) {
    return this.translationSubject.value === lang;
  }

  changeLang(lang: string): void {
    this.translateService.use(lang);
    localStorage.setItem(translationTokenName, JSON.stringify(lang));
    this.translationSubject.next(lang);
  }
}
