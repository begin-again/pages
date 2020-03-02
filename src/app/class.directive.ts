import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) {}

  @Input('appClass') set classNames(namesObj: {}){
    for (const name in namesObj){
      if(namesObj[name]){
        this.element.nativeElement.classList.add(name);
      }
      else {
        this.element.nativeElement.classList.remove(name);
      }
    }
  }

}
