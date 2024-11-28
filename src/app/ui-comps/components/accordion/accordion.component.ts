import { Component } from '@angular/core';
import { Accordion } from '../../../../../projects/sassify-ui/src/lib/ts/accordion';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  ngAfterViewInit() {
    const accordionElements = document.querySelectorAll('.accordion-main');
    new Accordion(accordionElements as NodeListOf<HTMLElement>);
  }
}
