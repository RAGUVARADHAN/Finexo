import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el:ElementRef) { }
  @HostListener('click')nextfun()
  {
    var ele=this.el.nativeElement.parentElement.parentElement.children[0];
    console.log(ele);
    var item=document.getElementsByClassName("customers-div3");
    ele.append(item[0]);
  }
}
