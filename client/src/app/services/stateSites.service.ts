import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class StateSitesService {
  constructor(private http: HttpClient) { }

  getCheckedLinks(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/mtlstates/siteLinks`);
  }

  getCheckedLinksByDate(date: string): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/mtlstates/siteLinks/${date}`);
  }

  postStateLinks(siteData: any){
    return this.http.post<any>(`${environment.apiUrl}/mtlstates/postLinks`, {
      siteData
    });
  }
}
