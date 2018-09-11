import { Component, OnInit } from '@angular/core';
import { AsteroidsServiceService } from 'src/app/services/asteroids-service.service';

@Component({
  selector: 'app-asteroids-table',
  templateUrl: './asteroids-table.component.html',
  styleUrls: ['./asteroids-table.component.css']
})
export class AsteroidsTableComponent implements OnInit {

  gridApi;
  gridColumnApi;
  columnDefs;
  sortingOrder;
  initTable = false;

  constructor( private asteroidsService: AsteroidsServiceService ) {
    this.columnDefs = [
      {headerName: 'Close_approach_date', field: 'close_approach_date', width: 180, sortingOrder: ['asc', 'desc'] },
      {headerName: 'Name', field: 'name', width: 180 },
      {headerName: 'Kilometers_per_hour', field: 'kilometers_per_hour', width: 180},
      {headerName: 'Estimated_diameter_min', field: 'estimated_diameter_min', width: 180},
      {headerName: 'Estimated_diameter_max', field: 'estimated_diameter_max', width: 180}
    ];
  }

  ngOnInit() {
    this.asteroidsService.initializeTable.subscribe((bool: boolean) => {
      this.initTable = bool;
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.asteroidsService.getAsteroids().subscribe(
      (asteroidsData: {}) => {
        params.api.setRowData(asteroidsData);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
