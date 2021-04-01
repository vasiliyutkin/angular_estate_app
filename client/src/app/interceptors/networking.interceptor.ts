import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SpinnerManagerService } from '../services/spinner.manager.service';

@Injectable()
export class NetworkingInterceptor implements HttpInterceptor {
  constructor(private spinnerManager: SpinnerManagerService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request instanceof HttpRequest) {
      this.spinnerManager.increaseStateCounter();
    }

    return next.handle(request).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          setTimeout(() => this.spinnerManager.decreaseStateCounter(), 1500);
        }
      }),
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          setTimeout(() => this.spinnerManager.decreaseStateCounter(), 1500);
        }

        return throwError(err.error.message || err.statusText);
      })
    );
  }
}
