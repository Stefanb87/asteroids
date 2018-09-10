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
        return data;
      }), 
      catchError((error: Response) => {
        return Observable.throw('Something went wrong');
      })
    );
  }
}
