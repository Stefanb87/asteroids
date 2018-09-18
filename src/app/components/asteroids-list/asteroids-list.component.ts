import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AsteroidsService } from '../../services/asteroids/asteroids.service';
import { ChosenAsteroidsObj } from '../../interfaces/chosen-asteroids-obj';

@Component({
  selector: 'app-asteroids-list',
  templateUrl: './asteroids-list.component.html',
  styleUrls: ['./asteroids-list.component.css']
})
export class AsteroidsListComponent implements OnInit {

  dataForList;
  dataForListCopy;
  selectedAsteroid = new FormControl();
  chosenAsteroidsWithSelf: ChosenAsteroidsObj[];

  constructor(private asteroidsService: AsteroidsService) {
    this.asteroidsService.asteroidsDataForTableSubj.subscribe((data) => {
      this.dataForList = data;
    });
    this.asteroidsService.chosenAsteroidsWithSelfSubj.subscribe((data) => {
      this.chosenAsteroidsWithSelf = data;
    });
   }

  ngOnInit() {
    this.dataForListCopy = JSON.parse(JSON.stringify( this.dataForList ));
    this.chosenAsteroidsWithSelf = [];
  }

  addInArray() {
    if(this.chosenAsteroidsWithSelf.length == 0) {
      this.dataForListCopy = JSON.parse(JSON.stringify( this.dataForList ));
      this.dataForListCopy.forEach((data, d) => {
        if(data.name === this.selectedAsteroid.value) {
          this.chosenAsteroidsWithSelf.push({ name: data.name, self: data.self });
          this.dataForListCopy.splice(d, 1);
        }
      });
      //console.log('AAA', this.chosenAsteroidsWithSelf);
      this.asteroidsService.chosenAsteroidsWithSelfSubj.next(this.chosenAsteroidsWithSelf);
      this.getPassData(this.chosenAsteroidsWithSelf[0].self);
    }else{
      const arr = [];
      this.chosenAsteroidsWithSelf.forEach((obj: ChosenAsteroidsObj) => {
        if(this.selectedAsteroid.value === obj.name) {
          //console.log('BBB', this.chosenAsteroidsWithSelf);
          return;
        }else{
          this.dataForListCopy.forEach((data, d) => {
            if(data.name === this.selectedAsteroid.value) {
              arr.push({ name: data.name, self: data.self });
              this.dataForListCopy.splice(d, 1);
            }
          });
        }
      });
      this.chosenAsteroidsWithSelf.push(arr[0]);
      //console.log('CCC', this.chosenAsteroidsWithSelf);
      this.asteroidsService.chosenAsteroidsWithSelfSubj.next(this.chosenAsteroidsWithSelf);
      this.getPassData(arr[0].self);
    }
    
  }
    
  remove(el: HTMLElement) {
    const asteroidName = el.innerText.substring(0, el.innerText.length - 1);
    this.chosenAsteroidsWithSelf.forEach((asteroid: ChosenAsteroidsObj, a) => {
      if (asteroid.name === asteroidName) {
        this.chosenAsteroidsWithSelf.splice(a, 1);
        this.asteroidsService.passingDataFromApi.splice(a, 1);
      }
    });
    console.log('DDD', this.chosenAsteroidsWithSelf);
    console.log('EEE', this.asteroidsService.passingDataFromApi);
  }

  getPassData(self) {
      this.asteroidsService.extractPassingData(self);
  }
  
}
