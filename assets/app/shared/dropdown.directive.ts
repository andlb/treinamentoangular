import {Directive,HostListener,HostBinding} from '@angular/core';

@Directive({
    selector:'[invDropdown]'
})
export class DropdonwDirective {

    @HostBinding('class.open') isOpen = false;
    
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}