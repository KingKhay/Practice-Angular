import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserTableComponent} from "./user-table.component";
import {HeaderModule} from "../../header/header.module";



@NgModule({
  declarations: [UserTableComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports:[UserTableComponent]
})
export class UserTableModule { }
