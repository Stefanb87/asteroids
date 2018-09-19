import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { nasaUrl, nasaApiKey } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService<TData> {
  constructor(private httpClient: HttpClient) { }

  getAsteroidData(startDate, endDate): Observable<TData> {
    return this.httpClient.get<TData>(nasaUrl + startDate + '&end_date=' + endDate + nasaApiKey);
  }

  getPassingData(api): Observable<TData> {
    return this.httpClient.get<TData>(api);
  }
}
