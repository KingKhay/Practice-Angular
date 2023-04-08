import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableComponent} from "../table/table.component";
import {RoomsBookingComponent} from "./rooms-booking/rooms-booking.component";
import {UserAddComponent} from "../user-add/user-add.component";

const routes: Routes = [
  {path: 'rooms', component: TableComponent, children: [
    //Always place static routes first before dynamic routes
      {path: 'add', component: UserAddComponent},
      {path: ':id', component: RoomsBookingComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
