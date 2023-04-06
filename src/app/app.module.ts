import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RoomsComponent} from './rooms/rooms.component';
import {UserTableComponent} from './rooms/user-table/user-table.component';
import {HeaderComponent} from './header/header.component';
import {ContainerComponent} from './container/container.component';
import {EmployeeComponent} from './employee/employee.component';
import {APP_CONFIG, APP_SERVICE_CONFIG} from "./AppConfig/appconfig.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TableComponent} from './table/table.component';
import {RequestInterceptor} from "./request.interceptor";
import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ErrorComponent } from './error/error.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    UserTableComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    TableComponent,
    NavComponent,
    ErrorComponent,
    RoomsBookingComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

