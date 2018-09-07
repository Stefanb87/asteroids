import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatInputModule } from '@angular/material/input';
// import { MatNativeDateModule, MatFormFieldModule, NativeDateModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AsteroidsServiceService } from './services/asteroids-service.service';

import { AppComponent } from './app.component';
import { AsteroidsTableComponent } from './components/asteroids-table/asteroids-table.component';
import { DatepickComponent } from './components/datepick/datepick.component';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidsTableComponent,
    DatepickComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // BrowserAnimationsModule,
    // MatDatepickerModule,
    // MatInputModule,
    // MatNativeDateModule,
    // NativeDateModule,
    // MatFormFieldModule,
    NgbModule
  ],
  providers: [AsteroidsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
