import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { Nav } from './../../../../../projects/sassify-ui/src/lib/ts/nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements AfterViewInit {
  private navLeftInstance!: Nav;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    const container = this.elRef.nativeElement.querySelector('.nav-left');
    if (container) {
      this.navLeftInstance = new Nav(container);
    } else {
      console.error('Container element .nav-left not found.');
    }
  }
}
