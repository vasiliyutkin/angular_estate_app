import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class SubscriptionService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getsubs(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/subscriptions/`, {
      headers: this.authenticationService.headers,
    });
  }

  getsubByUserId(userId: string): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/subscriptions/${userId}`, {
        headers: this.authenticationService.headers,
      })
      .pipe(
        map((subs) => {
          return subs;
        })
      );
  }

  getUserEntities(userId: string): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/subscriptions/banking/${userId}`, {
        headers: this.authenticationService.headers,
      })
      .pipe(
        map((subs) => {
          return subs;
        })
      );
  }

  getEntityByNumber(identificationNumber: string): Observable<any> {
    return this.http
      .get<any>(
        `${environment.apiUrl}/subscriptions/entities/${identificationNumber}`,
        { headers: this.authenticationService.headers }
      )
      .pipe(
        map((subs) => {
          return subs;
        })
      );
  }

  signUpEntities(entityData: any) {
    return this.http.post<any>(
      `${environment.apiUrl}/subscriptions/signUpEntity`,
      {
        entityData,
      }
    );
  }

  addEntitySubs(entityData: any) {
    return this.http.post<any>(
      `${environment.apiUrl}/subscriptions/addEntitySub`,
      {
        entityData,
      }
    );
  }

  removeEntityById(bankId: string, identificationNumber: string) {
    return this.http
      .delete<any>(
        `${environment.apiUrl}/subscriptions/removeEntityById/${bankId}/${identificationNumber}`,
        { headers: this.authenticationService.headers }
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  subscribeToState(state: string, userId: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/subscriptions/subscribeToState`, {
        state,
        userId,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  updateSub(sub: any) {
    return this.http
      .post<any>(`${environment.apiUrl}/subscriptions/updateSub`, {
        sub,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  deleteSub(id, stateKey) {
    return this.http
      .delete<any>(
        `${environment.apiUrl}/subscriptions/deleteSub/${id}/${stateKey}`,
        {}
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
