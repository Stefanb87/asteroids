import { Component, OnInit } from '@angular/core';
import { AsteroidsService } from '../../services/asteroids/asteroids.service';
import { DateObj } from '../../interfaces/date-obj';

@Component({
  selector: 'app-datepick',
  templateUrl: './datepick.component.html',
  styleUrls: ['./datepick.component.css']
})
export class DatepickComponent implements OnInit {

  private startDateInput: DateObj;
  private endDateInput: DateObj;
  private formattedStartDate: string;
  private formattedEndDate: string;

  public errorMoreThanSeven: boolean = false;
  public errorLessThanStart: boolean = false;

  constructor(private asteroidsService: AsteroidsService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.asteroidsService.asteroidsDataForTableSubj.next([]);
    if(this.endDateInput.day - this.startDateInput.day > 7) {
      this.errorMoreThanSeven = true;
      return;
    } else if (this.endDateInput.day <= this.startDateInput.day) {
      this.errorLessThanStart = true;
      return;
    }

    if (this.startDateInput.month < 10 && this.startDateInput.day >= 10) {
      let formattedStartMonth = "0" + this.startDateInput.month + "";
      this.formattedStartDate = this.startDateInput.year + '-' + formattedStartMonth + '-' + this.startDateInput.day;
    } else if (this.startDateInput.month >= 10 && this.startDateInput.day < 10) {
      let formattedStartDay = "0" + this.startDateInput.day + "";
      this.formattedStartDate = this.startDateInput.year + '-' + this.startDateInput.month + '-' + formattedStartDay;
    } else if (this.startDateInput.month < 10 && this.startDateInput.day < 10) {
      let formattedStartMonth = "0" + this.startDateInput.month + "";
      let formattedStartDay = "0" + this.startDateInput.day + "";
      this.formattedStartDate = this.startDateInput.year + '-' + formattedStartMonth + '-' + formattedStartDay;
    }

    if (this.endDateInput.month < 10 && this.endDateInput.day >= 10) {
      let formattedEndMonth = "0" + this.endDateInput.month + "";
      this.formattedEndDate = this.endDateInput.year + '-' + formattedEndMonth + '-' + this.endDateInput.day;
    } else if (this.endDateInput.month >= 10 && this.endDateInput.day < 10) {
      let formattedEndDay = "0" + this.endDateInput.day + "";
      this.formattedEndDate = this.endDateInput.year + '-' + this.endDateInput.month + '-' + formattedEndDay;
    } else if (this.endDateInput.month < 10 && this.endDateInput.day < 10) {
      let formattedEndMonth = "0" + this.endDateInput.month + "";
      let formattedEndDay = "0" + this.endDateInput.day + "";
      this.formattedEndDate = this.endDateInput.year + '-' + formattedEndMonth + '-' + formattedEndDay;
    }

    this.asteroidsService.startDateSubj.next(this.formattedStartDate);
    this.asteroidsService.endDateSubj.next(this.formattedEndDate);
    this.asteroidsService.extractAsteroidsData();

  }



  resetErrors(flag) {
    this.errorMoreThanSeven = flag;
    this.errorLessThanStart = flag;
  }
}
