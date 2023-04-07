import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  @Input()
  color: string = 'red';
  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(element.nativeElement)
  }

  ngOnInit() {

  }

  @HostListener('mouseenter')
  onHover(){
    console.log("Mouse Enter")
  }


}
