import { Component } from '@angular/core';
import {IPerson} from "../rooms/services/rooms.service";
import {UserService} from "../table/services/user.service";
import {Observable} from "rxjs";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  constructor(private userService: UserService) {
  }

  user: IPerson = {
    id: '',
    name: '',
    age: 0
  }

  successMessage: string = '';

  user$!: Observable<IPerson>;

  addUser(form: NgForm) {
    this.userService.addUser(this.user)
      .subscribe(
        response => {
          this.successMessage = "User Added Successfully";
          form.resetForm({
            id: '',
            name: '',
            age: 18
          });
        });
  }
}
