import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {User} from "../app.component";
import {RoomsService} from "./services/rooms.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit{
  constructor(private roomsService: RoomsService) {
  }

  stream$ = new Observable<string>(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete()
  })

  usersList: User[] = [];
  ngOnInit(): void {
    this.stream$.subscribe((data) => console.log(data));
    this.usersList = this.roomsService.getRooms();

  }

  selectedUser!: User;


  selectUser(user: User) {
    this.selectedUser = user;
  }

  addUser(company: string, contact: string, country: string) {
    this.usersList = [...this.usersList, {company, contact, country}]
  }
}
