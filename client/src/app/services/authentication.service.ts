import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
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

  public get headers() {
    const updateHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.currentUserValue}`,
      'Content-Type': 'application/json'
    });
    return updateHeaders;
  }


  getUsers() {
    return this.http
      .get<any>(`${environment.apiUrl}/auth`, { headers: this.headers })
      .pipe(
        map((user) => {
          return user;
        })
    );
  }

  getUserById(userId: string) {
    return this.http
      .get<any>(`${environment.apiUrl}/auth/user/${userId}`, { headers: this.headers })
      .pipe(
        map((user) => {
          return user;
        })
    );
  }

  deactivateUserById(userId: string, status: boolean) {
    return this.http
      .post<any>(`${environment.apiUrl}/auth/deactivate`, { userId, status})
      .pipe(
        map((user) => {
          return user;
        })
    );
  }

  deleteUserById(userId: string) {
    return this.http
      .delete<any>(`${environment.apiUrl}/auth/delete/${userId}`, { headers: this.headers })
      .pipe(
        map((user) => {
          return user;
        })
    );
  }

  signUpUser(userData: any) {
    return this.http
      .post<any>(`${environment.apiUrl}/auth/signUp`, {
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
          const { accessToken, userData} = data;
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
      .post<any>(`${environment.apiUrl}/auth/resetPassword`, {
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

  passwordChange(oldPassword: string, newPassword: string, user: any) {
    return this.http.post<any>(`${environment.apiUrl}/auth/password-change`, {
      oldPassword,
      newPassword,
      user
    });
  }

  sendEmail(email: string, name?: string , message?: string, location?: string ): Observable<boolean> {
    return this.http
      .post<any>(`${environment.apiUrl}/auth/sendEmail`, {
        name,
        email,
        message,
        location
      })
      .pipe(map((res) => res.ok));
  }
}
