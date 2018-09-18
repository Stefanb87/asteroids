import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { RoutesModule } from './modules/routes/routes.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DatepickComponent } from './components/datepick/datepick.component';
import { AsteroidsTableComponent } from './components/asteroids-table/asteroids-table.component';
import { AsteroidsListComponent } from './components/asteroids-list/asteroids-list.component';
import { PassingsNearEarthComponent } from './components/passings-near-earth/passings-near-earth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatepickComponent,
    AsteroidsTableComponent,
    AsteroidsListComponent,
    PassingsNearEarthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    NgbModule,
    AgGridModule.withComponents([]),
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
