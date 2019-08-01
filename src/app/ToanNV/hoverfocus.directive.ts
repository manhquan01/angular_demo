import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverfocus]'
})
export class HoverfocusDirective {

  // constructor() { }
  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText = 'PHP Fresher GMO'; // truy cập vào trong DOM, thay đổi text của thành phần này. 
 }
  @HostBinding('style.background-color') backgroundColor: string;

  @HostListener('mouseover') onHover() {
      // this.backgroundColor = '#188AE2';
      this.backgroundColor = 'green';
  }

  @HostListener('mouseout') onLeave() {
      // this.backgroundColor = '#7FC1FC';
      this.backgroundColor = 'blanchedalmond';
  }
}
