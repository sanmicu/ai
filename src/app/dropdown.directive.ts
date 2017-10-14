import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {
  private isOpen;

  @HostBinding('class.open') get opened(){
    return this.isOpen;
  }
  @HostListener('mouseover') open(){
    this.isOpen = true;
  }
  @HostListener('mouseleave') close(){
    this.isOpen = false;
  }
}
