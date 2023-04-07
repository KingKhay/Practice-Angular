import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  color: string = 'red';
  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(element.nativeElement)
  }

  ngOnInit() {

  }

  @HostListener('hover')
  onHover(){
    this.renderer.setStyle(this.element.nativeElement,'color','blue');
  }


}
