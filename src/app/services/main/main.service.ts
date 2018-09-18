import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { nasaUrl, nasaApiKey } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient: HttpClient) { }

  getAsteroidData(startDate, endDate) {
    return this.httpClient.get(nasaUrl + startDate + '&end_date=' + endDate + nasaApiKey);
  }

  getPassingData(api) {
    return this.httpClient.get(api);
  }
}
