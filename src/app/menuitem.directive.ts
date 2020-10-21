import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenuitem]'
})
export class MenuitemDirective {

  @HostBinding('class.itemOrange') private mostrar = false;

  @HostListener('mouseover') onOver(): void {
    this.mostrar = true;
  }

  @HostListener('mouseout') onOut(): void {
    this.mostrar = false;
  }
}
