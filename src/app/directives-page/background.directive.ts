import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  @HostBinding('style.backgroundColor')
  background!: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
    
  }

  @HostListener('mouseenter') mouseEnter() {
    this.background = 'green';
    this.renderer.addClass(this.elementRef.nativeElement, 'white-text');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = 'transparent';
    this.renderer.removeClass(this.elementRef.nativeElement, 'white-text');
  }
}
