import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EmployeeComponent} from "./employee/employee.component";
import {TableComponent} from "./table/table.component";

const routes: Routes = [
  {path: 'employees', component: EmployeeComponent},
  {path: 'rooms', component: TableComponent},
  {path: '', redirectTo: 'rooms', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
