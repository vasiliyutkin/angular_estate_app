import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountService {
  constructor(private http: HttpClient) {}

  passwordChange(oldPassword: string, newPassword: string, user: any) {
    return this.http.post<any>(`${environment.apiUrl}/auth/password-change`, {
      oldPassword,
      newPassword,
      user,
    });
  }
}
