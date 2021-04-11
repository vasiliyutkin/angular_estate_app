import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { jwtTokenName, userTokenName } from './auth.constants';
import { User } from '../models/user';

import { SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private jwtSubject: BehaviorSubject<{ accessToken: string }>;
  private userSubject: BehaviorSubject<User>;

  constructor(
    private http: HttpClient,
    private authService: SocialAuthService
  ) {
    this.jwtSubject = new BehaviorSubject<{ accessToken: string }>(
      JSON.parse(localStorage.getItem(jwtTokenName))
    );

    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem(userTokenName))
    );
  }

  public get jwtValue(): { accessToken: string } {
    return this.jwtSubject.value;
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  public get isAdmin() {
    return this.userValue && this.userValue.isAdmin;
  }

  public get loggedIn() {
    return localStorage.getItem(jwtTokenName) !== null;
  }

  signUpUser(userData: User) {
    return this.http.post<any>(`${environment.apiUrl}/auth/signup`, {
      ...userData,
    });
  }

  forgotPassword(userData: User) {
    return this.http.post<any>(`${environment.apiUrl}/auth/forgot-password`, {
      ...userData,
    });
  }

  login(userData: User) {
    return this.http
      .post<any>(`${environment.apiUrl}/auth/login`, { ...userData })
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

  resetPassword(userData: User) {
    return this.http
      .post<any>(`${environment.apiUrl}/auth/reset-password`, { ...userData })
      .pipe(map((res) => res));
  }

  getUser(userId: string): any {
    return this.http
      .get<any>(`${environment.apiUrl}/user?userId=${userId}`)
      .pipe(map((res) => res));
  }

  logout(): Promise<null> {
    localStorage.removeItem(jwtTokenName);
    localStorage.removeItem(userTokenName);

    this.jwtSubject.next(null);
    this.userSubject.next(null);

    return Promise.resolve(null);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  async signOut(): Promise<void> {
    try {
      await this.authService.signOut();
    } catch (_) {}
  }
}
