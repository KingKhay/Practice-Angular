import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPerson} from "../../rooms/services/rooms.service";
import {shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(person: IPerson){
    console.log("Post Called")
    return this.http.post<IPerson>('/api/v1/people', person).pipe(shareReplay());
  }
}
