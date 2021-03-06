import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ExceptionsInterceptor implements HttpInterceptor {
  constructor(public toasterService: ToastrService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((_) => {
        /*         if (evt instanceof HttpResponse) {
          if (evt.body && evt.body.ok) {
            this.toasterService.success(evt.body);
          }
        } */
      }),
      catchError((res: any) => {
        if (res instanceof HttpErrorResponse) {
          try {
            this.toasterService.warning(res.error.error, '', {});
          } catch (e) {
            this.toasterService.error(res.error, '', {});
          }
        }

        return throwError(res);
      })
    );
  }
}
