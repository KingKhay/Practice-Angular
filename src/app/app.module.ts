import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RoomsComponent} from './rooms/rooms.component';
import {UserTableComponent} from './rooms/user-table/user-table.component';
import {HeaderComponent} from './header/header.component';
import {ContainerComponent} from './container/container.component';
import {EmployeeComponent} from './employee/employee.component';
import {APP_CONFIG, APP_SERVICE_CONFIG} from "./AppConfig/appconfig.service";
import {HttpClientModule} from "@angular/common/http";
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    UserTableComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
