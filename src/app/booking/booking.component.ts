import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      roomId: [''],
      guestEmail: [''],
      guestName: [''],
      guestCity: [''],
      guestMobileNumber: [''],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        state: [''],
      }),
    })
  }

  addBooking() {
    //Use getRawValue instead of value.
    console.log(this.bookingForm.getRawValue())
  }
}
