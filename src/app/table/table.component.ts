import {Component, OnInit} from '@angular/core';
import {IPerson} from "../rooms/services/rooms.service";
import {TableService} from "./services/table.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  people!: IPerson[];

  stream$!: Observable<IPerson[]>;

  constructor(private tableService: TableService) {

  }

  ngOnInit(): void {
    this.stream$ = this.tableService.getPeople();
  }

  addPerson(person: IPerson): void {
    this.tableService.addPerson(person).subscribe(response => console.log(response));
  }


  makePostRequest() {
    let person: IPerson = {id: "479", name: "Roddy Rich", age: 100}
    this.addPerson(person);
  }

  makePutRequest() {
    let id = "479"
    let person: IPerson = {id: "479", name: "Lebron James", age: 90}

    this.tableService.updatePerson(id, person).subscribe(response => console.log(response));
  }

  getPhotos() {
    this.tableService.getPhotos().subscribe(event => console.log(event));
  }
}
