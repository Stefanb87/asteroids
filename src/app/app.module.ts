import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { Routes, RouterModule } from '@angular/router';

import { AsteroidsServiceService } from './services/asteroids-service.service';

import { AppComponent } from './app.component';
import { AsteroidsTableComponent } from './components/asteroids-table/asteroids-table.component';
import { DatepickComponent } from './components/datepick/datepick.component';
import { AsteroidsListComponent } from './components/asteroids-list/asteroids-list.component';
import { PassingsNearEarthComponent } from './components/passings-near-earth/passings-near-earth.component';

const appRoutes: Routes = [
  { path: '', component: DatepickComponent },
  { path: 'passings', component: PassingsNearEarthComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AsteroidsTableComponent,
    DatepickComponent,
    AsteroidsListComponent,
    PassingsNearEarthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    NgbModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AsteroidsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
