import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingForm!: FormGroup;


  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      roomId: ['',[Validators.required, Validators.minLength(3)], Validators.maxLength(3)],
      guestEmail: ['', [Validators.required, Validators.email]],
      guestName: [''],
      guestCity: new FormControl(''),
      guestMobileNumber: [''],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        state: [''],
      }),
      guests: this.fb.array([
        this.fb.group({
          name: [''],
          age: [''],
        })
      ])
    })
  }

  addBooking() {
    //Use getRawValue instead of value.
    console.log(this.bookingForm.getRawValue())

  }
}
