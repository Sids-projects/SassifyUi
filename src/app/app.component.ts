import { Component, OnInit } from '@angular/core';
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
  showNavLinks: boolean = false;
  appMenu: any = [];

  constructor(private router: Router, private sharedService: SharedService) {
    this.appMenu = this.sharedService.appMenu;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects.split('/')[1];
        this.appHeaderProp = currentRoute;
      }
    });
  }

  appHeader(param: string) {
    this.appHeaderProp = param;
  }

  navLinksFn() {
    this.showNavLinks = !this.showNavLinks;
  }
}
