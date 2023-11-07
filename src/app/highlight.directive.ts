import { Directive, Input, TemplateRef, ViewContainerRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dir]',
})
export class HighlightDirective {
  constructor(private templateRef: TemplateRef<any>, private veiwContainer: ViewContainerRef) {
    this.veiwContainer.createEmbeddedView(this.templateRef)

    console.log('this is dir ----------', this.dir)
  }

  @Input() dir: any

  @HostListener('mouseenter') onMouseEnter () {
    console.log('this is dir ---------', this.dir)
  }
}
