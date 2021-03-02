import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private jwtSubject: BehaviorSubject<{ accessToken: string }>;
  public user: any;

  constructor(private http: HttpClient) {
    this.jwtSubject = new BehaviorSubject<{ accessToken: string }>(
      JSON.parse(localStorage.getItem('jwt'))
    );
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  public get jwtValue(): { accessToken: string } {
    return this.jwtSubject.value;
  }

  public get userInfo() {
    return this.user;
  }

  public get isAdmin() {
    return this.user && this.user.isAdmin;
  }

  public get loggedIn() {
    return localStorage.getItem('jwt') !== null;
  }

  signUpUser(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/signup`, {
        username,
        password,
    });
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/auth/login`, {
        username,
        password,
      })
      .pipe(
        map((res) => {
          const { accessToken, user } = res.data;

          localStorage.setItem('jwt', JSON.stringify({ accessToken }));
          localStorage.setItem('user', JSON.stringify(user));
          sessionStorage.setItem('user', JSON.stringify(user));

          this.jwtSubject.next({ accessToken });

          return res;
        })
      );
  }

  resetPassword(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/auth/reset-password`, {
        username,
        password,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    this.jwtSubject.next(null);
    window.location.href = '/';
  }
}
