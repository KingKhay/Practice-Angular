import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EmployeeComponent} from "./employee/employee.component";
import {ErrorComponent} from "./error/error.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "./guards/login.guard";

const routes: Routes = [
  {path: 'employees', component: EmployeeComponent, canActivate: [LoginGuard]},
  {path: 'users/add', component: UserAddComponent, canActivate: [LoginGuard]},
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
