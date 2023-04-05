import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {User} from "../../app.component";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableComponent implements OnChanges{

  @Input()
  users: User[] = [];

  @Output()
  selectedUser = new EventEmitter<User>();
  title: string = "Title from User Table to Header Component";

  selectUser(user: User) {
    this.selectedUser.emit(user);
  }
  ngOnChanges(changes: SimpleChanges): void {
     console.log(changes);
  }
}
