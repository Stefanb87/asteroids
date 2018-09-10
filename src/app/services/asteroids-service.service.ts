import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError  } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsteroidsServiceService {

  api: string = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-12-30&end_date=2018-01-06&api_key=x0HeIJzRCLm3lj0zrfXt2LltusKVCO7aoHmRkVq2';

  constructor(private http: Http) { }

  getAsteroids() {
    return this.http.get(this.api).pipe(
      map((response: Response) => {
        const data = response.json();
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
                  estimated_diameter_max: obj.estimated_diameter.meters.estimated_diameter_max
                }
              );
            }
          });
        });
        // console.log(mappedAsteroidData);
        return mappedAsteroidData;
      }), 
      catchError((error: Response) => {
        return Observable.throw('Something went wrong');
      })
    );
  }
}
