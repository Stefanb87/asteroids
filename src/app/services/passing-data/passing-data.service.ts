import { Injectable } from '@angular/core';
import { MainService } from '../main/main.service';
import { PassingsDataObj } from '../../interfaces/passings-data-obj';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassingDataService extends MainService<PassingsDataObj> {

  passingDataFromApi: PassingsDataObj[] = [];
  
  constructor(httpClient: HttpClient) {
    super(httpClient);
   }

  extractPassingData(api: string) {
    this.getPassingData(api).subscribe((data: PassingsDataObj) => {
      this.passingDataFromApi.push(data);
      //console.log('passingDataFromApi', this.passingDataFromApi );
    });
  }
}
