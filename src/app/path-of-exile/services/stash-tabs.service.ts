import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StashTabsService {
  public url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getdata(stashId: any): Observable<any> {
    const url = `${this.url}/public-stash-tabs`;
    const params: HttpParams = new HttpParams().append('id', stashId);
    return this.http
      .get(url, { params })
      .pipe(response => {
        return response;
      });
  }

  getIntialdata(): Observable<any> {
    const url = `${this.url}/public-stash-tabs`;
    const params: HttpParams = new HttpParams().append('_start', '0').append('_end', '1');
    return this.http
      .get(url, { params })
      .pipe(response => {
        return response;
      });
  }
}
