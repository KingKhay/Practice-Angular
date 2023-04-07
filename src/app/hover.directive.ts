import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  color: string = 'red';
  constructor(private element: ElementRef) {
    console.log(element.nativeElement)
  }

  ngOnInit() {

  }


}
