import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

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

  public get loggedIn() {
    return localStorage.getItem('jwt') !== null;
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
        map((res) => {
          const { accessToken, userData } = res.data;

          localStorage.setItem('jwt', JSON.stringify(accessToken));
          localStorage.setItem('user', JSON.stringify(userData));
          sessionStorage.setItem('user', JSON.stringify(userData));

          this.jwtSubject.next({ accessToken });

          return res;
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
  }
}
