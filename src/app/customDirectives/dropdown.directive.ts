import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector : '[appDropdown]'
})
export class DropdownDirective {

   // isOpen : boolean = false;

@HostBinding('class.dirColor') isOpen = false;

@HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
}
}