import { Component } from '@angular/core';
import { Dropdown } from './../../../../../projects/sassify-ui/src/lib/ts/dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  ngAfterViewInit() {
    const dropdownElements = document.querySelectorAll('.dropdown');
    new Dropdown(dropdownElements as NodeListOf<HTMLElement>);
  }
}
