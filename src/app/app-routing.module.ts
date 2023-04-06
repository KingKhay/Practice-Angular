import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EmployeeComponent} from "./employee/employee.component";
import {TableComponent} from "./table/table.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {path: 'employees', component: EmployeeComponent},
  {path: 'rooms', component: TableComponent},
  {path: '', redirectTo: 'rooms', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
