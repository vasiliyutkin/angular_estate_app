import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import {
  jwtTokenName,
  userTokenName,
  socialUserTokenName,
} from './auth.constants';
import { User } from '../models/user';

import { SocialAuthService, SocialUser } from 'angularx-social-login';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  VKLoginProvider,
} from 'angularx-social-login';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private jwtSubject: BehaviorSubject<{ accessToken: string }>;
  private userSubject: BehaviorSubject<User>;
  private socialUserSubject: BehaviorSubject<SocialUser>;

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

    this.socialUserSubject = new BehaviorSubject<SocialUser>(
      JSON.parse(localStorage.getItem(socialUserTokenName))
    );

    this.authService.authState.subscribe((socialUser: SocialUser) => {
      if (!socialUser) {
        return;
      }

      localStorage.setItem(
        jwtTokenName,
        JSON.stringify({ accessToken: socialUser.authToken })
      );
      localStorage.setItem(socialUserTokenName, JSON.stringify(socialUser));

      this.jwtSubject.next({ accessToken: socialUser.authToken });
      this.socialUserSubject.next(socialUser);
    });
  }

  public get jwtValue(): { accessToken: string } {
    return this.jwtSubject.value;
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  public get socialUserValue(): SocialUser {
    return this.socialUserSubject.value;
  }

  public get isAdmin() {
    return this.userValue && this.userValue.isAdmin;
  }

  public get loggedIn() {
    return localStorage.getItem(jwtTokenName) !== null;
  }

  public get isVkAvailable() {
    return window[VKLoginProvider.PROVIDER_ID];
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

  logout(): Promise<null> {
    localStorage.removeItem(jwtTokenName);
    localStorage.removeItem(userTokenName);
    localStorage.removeItem(socialUserTokenName);

    this.jwtSubject.next(null);
    this.userSubject.next(null);
    this.socialUserSubject.next(null);

    return Promise.resolve(null);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithVK(): void {
    this.authService.signIn(VKLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
