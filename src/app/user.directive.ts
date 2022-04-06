import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[navigation]',
})
export class UserNavigationDirective {
  constructor(private elementref: ElementRef, private renderer2: Renderer2) {}

  @HostListener('click') public triggerclick() {
    console.log('DDDDDDDDirective');
    this.renderer2.setStyle(
      this.elementref.nativeElement,
      'background',
      'green'
    );
    this.renderer2.setStyle(this.elementref.nativeElement, 'fontSize', '22px');
  }
}
