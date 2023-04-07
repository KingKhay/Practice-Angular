import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EmployeeComponent} from "./employee/employee.component";
import {TableComponent} from "./table/table.component";
import {ErrorComponent} from "./error/error.component";
import {RoomsBookingComponent} from "./rooms/rooms-booking/rooms-booking.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: 'employees', component: EmployeeComponent},
  {path: 'rooms', component: TableComponent},
  {path: 'rooms/:id', component: RoomsBookingComponent},
  {path: 'users/add', component: UserAddComponent},
  {path: 'users/login', component: LoginComponent},
  {path: '', redirectTo: 'rooms', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
