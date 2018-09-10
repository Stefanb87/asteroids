import { Component, OnInit } from '@angular/core';
import { AsteroidsServiceService } from 'src/app/services/asteroids-service.service';

@Component({
  selector: 'app-datepick',
  templateUrl: './datepick.component.html',
  styleUrls: ['./datepick.component.css']
})
export class DatepickComponent implements OnInit {

  asteroidsData: {};
  dateStart: {};
  dateEnd: {};

  constructor(private asteroidsService: AsteroidsServiceService) { }

  ngOnInit() {
    this.asteroidsService.getAsteroids().subscribe(
      (asteroidsData: {}) => {
        this.asteroidsData = asteroidsData;
        console.log(this.asteroidsData);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logDate() {
    console.log(this.dateStart, this.dateEnd);
  }

}
