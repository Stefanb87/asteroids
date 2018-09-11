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

import { AsteroidsServiceService } from './services/asteroids-service.service';

import { AppComponent } from './app.component';
import { AsteroidsTableComponent } from './components/asteroids-table/asteroids-table.component';
import { DatepickComponent } from './components/datepick/datepick.component';
import { AsteroidsListComponent } from './components/asteroids-list/asteroids-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidsTableComponent,
    DatepickComponent,
    AsteroidsListComponent
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
    AgGridModule.withComponents([])
  ],
  providers: [AsteroidsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
