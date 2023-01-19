import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEvidenzia]'
})
export class EvidenziaDirective {

  constructor(private e:ElementRef) {
    this.e.nativeElement.style.backgroundColor = "yellow";
  }

}
