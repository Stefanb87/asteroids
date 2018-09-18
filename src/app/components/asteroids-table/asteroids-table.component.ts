import { Component, OnInit } from '@angular/core';
import { AsteroidsService } from '../../services/asteroids/asteroids.service';

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
  dataForTable;

  constructor(private asteroidsService: AsteroidsService) { 
    this.columnDefs = [
      {headerName: 'Close_approach_date', field: 'close_approach_date', width: 180, sortingOrder: ['asc', 'desc'] },
      {headerName: 'Name', field: 'name', width: 180 },
      {headerName: 'Kilometers_per_hour', field: 'kilometers_per_hour', width: 180},
      {headerName: 'Estimated_diameter_min', field: 'estimated_diameter_min', width: 180},
      {headerName: 'Estimated_diameter_max', field: 'estimated_diameter_max', width: 180}
    ];
  }

  ngOnInit() {
    this.asteroidsService.asteroidsDataForTableSubj.subscribe((data) => {
      this.dataForTable = data;
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.dataForTable);
  }

}
