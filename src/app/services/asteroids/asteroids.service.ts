import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from '../main/main.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";
import { AsteroidsDataObj } from '../../interfaces/asteroids-data-obj';
import { ChosenAsteroidsObj } from '../../interfaces/chosen-asteroids-obj';
import { AsterDataTableObj } from '../../interfaces/aster-data-table-obj';

@Injectable({
  providedIn: 'root'
})
export class AsteroidsService extends MainService<AsteroidsDataObj> {

  asteroidsData: any[] = [];
  asteroidsDataForTable: AsterDataTableObj[] = [];
  asteroidsDataForTableSubj = new BehaviorSubject<object[]>([]);
  startDateSubj = new BehaviorSubject<string>('');
  startDate : string;
  endDateSubj = new BehaviorSubject<string>('');
  endDate: string;
  chosenAsteroidsWithSelfSubj = new BehaviorSubject<ChosenAsteroidsObj[]>([]);


  constructor(httpClient: HttpClient) { 
    super(httpClient);
    this.startDateSubj.subscribe((data: string) => {
      this.startDate = data;
    });
    this.endDateSubj.subscribe((data: string) => {
      this.endDate = data;
    });
  }

  extractAsteroidsData() {
    this.getAsteroidData(this.startDate, this.endDate).subscribe((asteroids: AsteroidsDataObj) => {
      this.asteroidsData = [];
      this.asteroidsDataForTable = [];
      for (const item in asteroids.near_earth_objects) {
        this.asteroidsData.push(asteroids.near_earth_objects[item]);
      }
      console.log('ASTEROIDSDATA', this.asteroidsData);
      this.asteroidsData.forEach((asteroidsArr) => {
        asteroidsArr.forEach((obj) => {
          if (obj.is_potentially_hazardous_asteroid) {
            this.asteroidsDataForTable.push(
              {
                close_approach_date: obj.close_approach_data[0].close_approach_date,
                name: obj.name,
                kilometers_per_hour: obj.close_approach_data[0].relative_velocity.kilometers_per_hour,
                estimated_diameter_min: obj.estimated_diameter.meters.estimated_diameter_min,
                estimated_diameter_max: obj.estimated_diameter.meters.estimated_diameter_max,
                self: obj.links.self
              }
            );
          }
        });
      });
      //console.log('ASTEROIDSDATATable', this.asteroidsDataForTable);
      this.asteroidsDataForTableSubj.next(this.asteroidsDataForTable);
    },
    (error) => {
      return Observable.throw('Something went wrong');
    });
  }
}
