import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { TranslationService } from '../services/translation.service';

@Injectable()
export class TranslationInterceptor implements HttpInterceptor {
  constructor(private translationService: TranslationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const lang: string = this.translationService.translationValue;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isApiUrl) {
      request = request.clone({
        setHeaders: {
          'Accept-Language': lang,
        },
      });
    }

    return next.handle(request);
  }
}
