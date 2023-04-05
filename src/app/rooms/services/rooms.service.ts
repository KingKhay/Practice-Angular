import { Injectable } from '@angular/core';
import {User} from "../../app.component";
import {HttpClient} from "@angular/common/http";

export interface IPerson{
  id: string;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  usersList: User[] = [{
    company: "Alfreds FutterKiste",
    contact: "Maria Anders",
    country: "Germany"
  },{
    company: "Centro Commercial",
    contact: "Francisco Chang",
    country: "Mexico"
  },
    {
      company: "Maxwell Enterprises",
      contact: "Maxwell Kownels",
      country: "Canada"
    }];

  constructor(private http: HttpClient) { }


  people!: IPerson[];

  getRooms(){
    let objectObservable = this.http.get<IPerson[]>('/api/v1/people');
    let subscription = objectObservable.subscribe(person => {this.people = person});


    return this.usersList;
  }
}
