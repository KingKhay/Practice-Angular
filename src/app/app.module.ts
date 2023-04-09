import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContainerComponent} from './container/container.component';
import {EmployeeComponent} from './employee/employee.component';
import {APP_CONFIG, APP_SERVICE_CONFIG} from "./AppConfig/appconfig.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TableComponent} from './table/table.component';
import {RequestInterceptor} from "./request.interceptor";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {ErrorComponent} from './error/error.component';
import {UserAddComponent} from './user-add/user-add.component';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import {HoverDirective} from './hover.directive';
import {EmailValidatorDirective} from './emailValidator/email-validator.directive';
import {RoomsModule} from "./rooms/rooms.module";
import {UserTableModule} from "./rooms/user-table/user-table.module";
import {HeaderModule} from "./header/header.module";
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    TableComponent,
    NavComponent,
    ErrorComponent,
    UserAddComponent,
    LoginComponent,
    HoverDirective,
    EmailValidatorDirective,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoomsModule,
    UserTableModule,
    HeaderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
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

