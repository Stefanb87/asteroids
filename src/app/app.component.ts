import { Component } from '@angular/core';
import { AsteroidsServiceService } from 'src/app/services/asteroids-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initList = false;

  constructor(private asteroidsService: AsteroidsServiceService) {
    this.asteroidsService.initializeList.subscribe((bool: boolean) => {
      this.initList = bool;
    });
  }
}
