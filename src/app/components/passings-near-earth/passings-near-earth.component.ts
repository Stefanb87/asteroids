import { Component, OnInit, OnDestroy } from '@angular/core';
import { PassingsDataObj } from '../../interfaces/passings-data-obj';
import { CloseApprDataObj } from '../../interfaces/close-appr-data-obj';
import { PassingDataService } from '../../services/passing-data/passing-data.service';

@Component({
  selector: 'app-passings-near-earth',
  templateUrl: './passings-near-earth.component.html',
  styleUrls: ['./passings-near-earth.component.css']
})
export class PassingsNearEarthComponent implements OnInit, OnDestroy {

  passingData: PassingsDataObj[] = [];
  passingDataWithNo: {}[] = [];
  numberOfPassings: number = 0;

  constructor(private passingDataService: PassingDataService) { }

  ngOnInit() {
    this.passingData = this.passingDataService.passingDataFromApi;
    this.passingDataWithNo = [];
      this.passingData.forEach((item: PassingsDataObj) => {
        item.close_approach_data.forEach((dataItem: CloseApprDataObj) => {
          if(dataItem.close_approach_date.substring(0, 4) >= "1900" && dataItem.close_approach_date.substring(0, 4) <= "1999") {
            this.numberOfPassings++;
            
          }
        });
        this.passingDataWithNo.push({name: item.name, no: this.numberOfPassings});
        this.numberOfPassings = 0;
      });
    
  }

  ngOnDestroy() {
    this.passingDataService.passingDataFromApi = [];
  }

}
