import {AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {RoomsComponent} from "./rooms/rooms.component";



export interface User{
  company: string;
  contact: string;
  country: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  constructor() {
    //Constructor usually used to inject services to the component.
  }

  @ViewChild('roomComponent', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  ngAfterViewInit(): void {
        // this.vcr.createComponent(RoomsComponent);
    }


  numbers: number[] = [10,20,30];
  ngOnInit(): void {
    //Load data from the backend when the component is created
  }


}
