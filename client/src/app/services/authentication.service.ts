import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<{ accessToken: string }>;
  public currentUser: any;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<{ accessToken: string }>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = JSON.parse(localStorage.getItem('user'));
  }

  public get currentUserValue(): { accessToken: string } {
    return this.currentUserSubject.value;
  }

  public get currentUserInfo() {
    return this.currentUser;
  }

  public get loggedIn() {
    return localStorage.getItem('currentUser') !== null;
  }

  public get headers() {
    const updateHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.currentUserValue}`,
      'Content-Type': 'application/json',
    });
    return updateHeaders;
  }

  signUpUser(userData: any) {
    return this.http.post<any>(`${environment.apiUrl}/auth/signup`, {
      userData,
    });
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/auth/signin`, {
        username,
        password,
      })
      .pipe(
        map((data) => {
          const { accessToken, userData } = data;
          localStorage.setItem('currentUser', JSON.stringify(accessToken));
          localStorage.setItem('user', JSON.stringify(userData));
          sessionStorage.setItem('user', JSON.stringify(userData));
          this.currentUserSubject.next(data);
          return data;
        })
      );
  }

  resetPassword(username: string, newPassword: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/auth/reset-password`, {
        username,
        newPassword,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }
}
