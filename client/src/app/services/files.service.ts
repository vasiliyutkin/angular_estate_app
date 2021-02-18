import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class FilesService {
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  getAllFiles(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/files/`, {
      headers: this.authenticationService.headers,
    });
  }

  getFilesByOrgIdAndState(orgId: string, state: string): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/files/${orgId}/${state}`, {
        headers: this.authenticationService.headers,
      })
      .pipe(
        map((files) => {
          return files;
        })
      );
  }

  createFolder(state: string, name: string, orgId: any) {
    return this.http
      .post<any>(`${environment.apiUrl}/files/create-folder`, {
        state,
        name,
        orgId,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  updateFolder(fileData: any, orgId: any) {
    return this.http
      .post<any>(`${environment.apiUrl}/files/update-folder`, {
        fileData,
        orgId,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  copyToAcrchive(orgId: string, state: string, fileData: any) {
    return this.http
      .post<any>(`${environment.apiUrl}/files/copyToAcrchive`, {
        orgId,
        state,
        fileData,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  deleteFolder(fileData: any, orgId: any) {
    return this.http
      .post<any>(`${environment.apiUrl}/files/delete-folder`, {
        fileData,
        orgId,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  uploadFile(formData: any) {
    const postData = new FormData();
    Object.keys(formData).forEach((key: string) => {
      postData.append(key, formData[key]);
    });
    return this.http
      .post<any>(`${environment.apiUrl}/files/upload`, postData)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  deleteFile(fileData: any) {
    return this.http
      .post<any>(`${environment.apiUrl}/files/delete-file`, {
        fileData,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
