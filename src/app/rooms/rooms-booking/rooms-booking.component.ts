import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit{

  constructor(private router: ActivatedRoute ) {
  }


  id$ = this.router.paramMap.pipe(map(params => params.get('id')));

  ngOnInit(): void {

  }


}
