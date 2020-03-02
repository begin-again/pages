/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    // this is the object where the directive is specified
    private viewContainer: ViewContainerRef,
    // the html placed within the viewContainer
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times: number){
      this.viewContainer.clear();
      for(let i =0; i < times; i++){
        this.viewContainer.createEmbeddedView(
          this.templateRef, 
          // context makes attributes available for aliasing
          {index: i}
        );
      }
  }
}
