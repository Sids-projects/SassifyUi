import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SassifyUI';
  appHeaderProp: string = '';
  appSubHeaderProp: string = '';
  showNavLinks: boolean = false;
  appMenu: any = [];

  @ViewChild('scrollArea', { static: false }) scrollArea!: ElementRef;

  constructor(private router: Router, private sharedService: SharedService) {
    this.appMenu = this.sharedService.appMenu;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute01 = event.urlAfterRedirects.split('/')[1];
        const currentRoute02 = event.urlAfterRedirects.split('/')[2];
        this.appHeaderProp = currentRoute01;
        this.appSubHeaderProp = currentRoute02;
      }
    });
  }

  appHeader(param: string) {
    this.appHeaderProp = param;
  }

  navLinksFn() {
    this.showNavLinks = !this.showNavLinks;
  }

  scrollLeft() {
    if (this.scrollArea && this.scrollArea.nativeElement) {
      this.scrollArea.nativeElement.scrollLeft -= 100;
    }
  }

  scrollRight() {
    if (this.scrollArea && this.scrollArea.nativeElement) {
      this.scrollArea.nativeElement.scrollLeft += 100;
    }
  }
}
