import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import {RoomsComponent} from "./rooms.component";
import {RoomsBookingComponent} from "./rooms-booking/rooms-booking.component";
import {UserTableModule} from "./user-table/user-table.module";
import {HeaderModule} from "../header/header.module";


@NgModule({
  declarations: [
    RoomsComponent,
    RoomsBookingComponent,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    UserTableModule,
    HeaderModule,
  ]
})
export class RoomsModule { }
