import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError  } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AsteroidsServiceService {

  startDate = new Subject();
  endDate = new Subject();
  initializeTable = new Subject();
  initializeList = new Subject();
  sDate;
  eDate;
  dataNameAndDate: {}[] = [];

  nearEarthPassData = new Subject();
  passData;
  passDataFromApiSubj = new Subject();
  passDataFromApi;

  constructor(private http: Http) { 
    this.startDate.subscribe((date: string) => {
      this.sDate = date;
    });
    this.endDate.subscribe((date: string) => {
      this.eDate = date;
    });
    this.nearEarthPassData.subscribe((passData: {}) => {
      this.passData = passData;
      console.log('SERVICEPASS', this.passData)
    });
    this.passDataFromApiSubj.subscribe((data: {}[]) => {
      this.passDataFromApi = data;
      console.log('PASSINGDATASER', this.passDataFromApi)
    });
  }

  getAsteroids() {   
    return this.http.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + this.sDate + '&end_date=' + this.eDate + '&api_key=x0HeIJzRCLm3lj0zrfXt2LltusKVCO7aoHmRkVq2').pipe(
      map((response: Response) => {
        const data = response.json();
        console.log('DATA', data);
        const allAsteroidsByDate = [];
        const mappedAsteroidData: {}[] = [];
        for (const item in data.near_earth_objects) {
          allAsteroidsByDate.push(data.near_earth_objects[item]);
        }
        allAsteroidsByDate.forEach((arr, a) => {
          arr.forEach((obj, o) => {
            if(obj.is_potentially_hazardous_asteroid) {
              mappedAsteroidData.push(
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
        //console.log(mappedAsteroidData);
        return mappedAsteroidData;
      }), 
      catchError((error: Response) => {
        return Observable.throw('Something went wrong');
      })
    );
  }


}
