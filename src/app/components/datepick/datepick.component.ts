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
  formattedStartDate: string;
  formattedEndDate: string;

  constructor(private asteroidsService: AsteroidsServiceService) { }

  ngOnInit() {
  }

  logDate() {
    if (this.dateStart.month < 10 && this.dateStart.day >= 10) {
      let formattedStartMonth = "0" + this.dateStart.month + "";
      this.formattedStartDate = this.dateStart.year + '-' + formattedStartMonth + '-' + this.dateStart.day;
    } else if (this.dateStart.month >= 10 && this.dateStart.day < 10) {
      let formattedStartDay = "0" + this.dateStart.day + "";
      this.formattedStartDate = this.dateStart.year + '-' + this.dateStart.month + '-' + formattedStartDay;
    } else if (this.dateStart.month < 10 && this.dateStart.day < 10) {
      let formattedStartMonth = "0" + this.dateStart.month + "";
      let formattedStartDay = "0" + this.dateStart.day + "";
      this.formattedStartDate = this.dateStart.year + '-' + formattedStartMonth + '-' + formattedStartDay;
    }

    if (this.dateEnd.month < 10 && this.dateEnd.day >= 10) {
      let formattedEndMonth = "0" + this.dateEnd.month + "";
      this.formattedEndDate = this.dateEnd.year + '-' + formattedEndMonth + '-' + this.dateEnd.day;
    } else if (this.dateEnd.month >= 10 && this.dateEnd.day < 10) {
      let formattedEndDay = "0" + this.dateEnd.day + "";
      this.formattedEndDate = this.dateEnd.year + '-' + this.dateEnd.month + '-' + formattedEndDay;
    } else if (this.dateEnd.month < 10 && this.dateEnd.day < 10) {
      let formattedEndMonth = "0" + this.dateEnd.month + "";
      let formattedEndDay = "0" + this.dateEnd.day + "";
      this.formattedEndDate = this.dateEnd.year + '-' + formattedEndMonth + '-' + formattedEndDay;
    }
    
    console.log(this.formattedStartDate, this.formattedEndDate);
    this.asteroidsService.startDate = this.formattedStartDate;
    this.asteroidsService.endDate = this.formattedEndDate;
    this.asteroidsService.getAsteroids();
  }

}
