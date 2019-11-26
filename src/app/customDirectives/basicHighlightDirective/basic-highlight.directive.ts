import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef,private renderer: Renderer2) { }

  ngOnInit(): void {

    // Its not a better practise to set styles directly to elements.
    this.elementRef.nativeElement.style.color = 'red';

    // Better way : to use Renderer and set styles/classes/properties
   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','lightgreen');
  }

}
