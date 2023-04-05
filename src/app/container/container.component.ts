import {AfterContentInit, Component, ContentChild} from '@angular/core';
import {EmployeeComponent} from "../employee/employee.component";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements AfterContentInit{
  @ContentChild(EmployeeComponent) employeeComponent!: EmployeeComponent;

  ngAfterContentInit(): void {
    console.log(this.employeeComponent);
    this.employeeComponent.name = 'Brood';
  }
}
