import { Component, OnInit } from '@angular/core';
import { AsteroidsService } from '../../services/asteroids/asteroids.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataForTable;

  constructor(private asteroidsService: AsteroidsService) { }

  ngOnInit() {
    this.asteroidsService.asteroidsDataForTableSubj.subscribe((data) => {
      this.dataForTable = data;
    });
  }

}
