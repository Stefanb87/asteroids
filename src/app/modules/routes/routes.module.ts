import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../../components/home/home.component';
import { PassingsNearEarthComponent } from '../../components/passings-near-earth/passings-near-earth.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'passings', component: PassingsNearEarthComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutesModule { }
