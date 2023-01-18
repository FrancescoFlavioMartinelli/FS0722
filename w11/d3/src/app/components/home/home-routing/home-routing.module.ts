import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingRoutingModule } from './home-routing-routing.module';
import { HomeComponent } from '../home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingRoutingModule
  ]
})
export class HomeRoutingModule { }
