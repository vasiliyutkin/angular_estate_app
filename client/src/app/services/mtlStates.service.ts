import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class MtlStateService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getMtlStates(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/mtlstates`, {
      headers: this.authenticationService.headers,
    });
  }

  getStatesLinks() {
    return this.http.get<any>(`${environment.apiUrl}/mtlstates/statelinks/`, {
      headers: this.authenticationService.headers,
    });
  }

  getUserAlertStatus(userId: string): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/mtlstates/alertStatus/${userId}`,
      { headers: this.authenticationService.headers }
    );
  }

  getMtlStateById(id: string): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/mtlstates/getstate/${id}`,
      { headers: this.authenticationService.headers }
    );
  }

  uploadXLSX(fileInfo: any): Observable<any> {
    return this.http
      .post<any>(`${environment.apiUrl}/mtlStates/upload-xlsx`, {
        fileData: [...fileInfo],
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  upsertAlertStatus(alertData: any) {
    return this.http
      .post<any>(`${environment.apiUrl}/mtlStates/upsertAlertStatus`, {
        alertData,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  updateStatesRenewal(renewalData: any) {
    return this.http
      .post<any>(`${environment.apiUrl}/mtlStates/updateStatesRenewal`, {
        renewalData,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getNotesByOrgAndStateId(orgId: string, stateName: string): Observable<any> {
    return this.http.get<any>(
      `${environment.apiUrl}/mtlstates/stateNotes/${orgId}/${stateName}`,
      { headers: this.authenticationService.headers }
    );
  }

  upsertNote(noteData: any, isNewNote: boolean) {
    return this.http
      .post<any>(`${environment.apiUrl}/mtlStates/stateNotes`, {
        headers: this.authenticationService.headers,
        noteData,
        isNewNote,
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
