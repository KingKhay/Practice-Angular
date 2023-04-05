import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPerson} from "../../rooms/services/rooms.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<IPerson[]>{
    return this.http.get<IPerson[]>("/api/v1/people");
  }

  addPerson(person: IPerson) {
    console.log("Post Method Called")
    return this.http.post("/api/v1/people", person);
  }
}
