import {Component, OnInit} from '@angular/core';
import {IPerson} from "../rooms/services/rooms.service";
import {TableService} from "./services/table.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  people!: IPerson[];

  constructor(private tableService: TableService ) {

  }

  ngOnInit(): void {
    this.tableService.getPeople().subscribe(response => this.people = response);
  }

  addPerson(person: IPerson): void {
    this.tableService.addPerson(person).subscribe(response => console.log(response));
  }


  makePostRequest() {
    let person: IPerson = {id: "479",name: "Roddy Rich", age: 100}
    this.addPerson(person);
  }
}
