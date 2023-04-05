import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnChanges{

  @Input()
  title: string = '';

  constructor() {
  }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges called for HeaderComponent")
  }

}
