import { Component, OnInit } from '@angular/core';
import { AsteroidsServiceService } from 'src/app/services/asteroids-service.service';
import { NgForm } from '@angular/forms';

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
  errorMoreThanSeven: boolean = false;
  errorLessThanStart: boolean = false;

  constructor(private asteroidsService: AsteroidsServiceService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if(this.dateEnd.day - this.dateStart.day > 7) {
      console.log('datum veci od 7 dana');
      this.errorMoreThanSeven = true;
      return;
    }
    if(this.dateEnd.day <= this.dateStart.day) {
      console.log('endDate manji od startDate');
      this.errorLessThanStart = true;
      return;
    }
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
    
    this.asteroidsService.startDate.next(this.formattedStartDate);
    this.asteroidsService.endDate.next(this.formattedEndDate);
    this.asteroidsService.initializeTable.next(true);
    this.asteroidsService.initializeList.next(true);
    this.asteroidsService.getAsteroids();
  }

  resetErrors(flag) {
    this.errorMoreThanSeven = flag;
    this.errorLessThanStart = flag;
  }
}
