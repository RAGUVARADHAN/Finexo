import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el:ElementRef) 
  { 

  }
  @HostListener('click')prevfun()
  {
    var ele=this.el.nativeElement.parentElement.parentElement.children[0];
    var item=document.getElementsByClassName("customers-div3");
    ele.prepend(item[item.length-1]);
  }
}
