import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { jwtTokenName, userTokenName } from './auth.constants';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private jwtSubject: BehaviorSubject<{ accessToken: string }>;
  private userSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.jwtSubject = new BehaviorSubject<{ accessToken: string }>(
      JSON.parse(localStorage.getItem(jwtTokenName))
    );
    this.userSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem(userTokenName))
    );
  }

  public get jwtValue(): { accessToken: string } {
    return this.jwtSubject.value;
  }

  public get userValue() {
    return this.userSubject.value;
  }

  public get isAdmin() {
    return this.userValue && this.userValue.isAdmin;
  }

  public get loggedIn() {
    return localStorage.getItem(jwtTokenName) !== null;
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

          localStorage.setItem(jwtTokenName, JSON.stringify({ accessToken }));
          localStorage.setItem(userTokenName, JSON.stringify(user));

          this.jwtSubject.next({ accessToken });
          this.userSubject.next(user);

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
      .pipe(map((res) => res));
  }

  logout(): Promise<null> {
    localStorage.removeItem(jwtTokenName);
    localStorage.removeItem(userTokenName);

    this.jwtSubject.next(null);
    this.userSubject.next(null);

    return Promise.resolve(null);
  }
}
