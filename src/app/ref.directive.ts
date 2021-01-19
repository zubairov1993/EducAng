import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[appRef]'
})
export class RefDirecrive {
  constructor(public containerRef: ViewContainerRef) {}
}
