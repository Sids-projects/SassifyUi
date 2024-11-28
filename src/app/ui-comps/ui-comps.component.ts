import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ui-comps',
  templateUrl: './ui-comps.component.html',
  styleUrls: ['./ui-comps.component.scss'],
})
export class UiCompsComponent implements OnInit {
  componentList: any = [];
  hasChildRoute: boolean = false;
  appUiCompsList: any = [];
  appHeaderProp: string = '';
  appSubHeaderProp: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {
    this.appUiCompsList = this.sharedService.appUiCompsList;
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.hasChildRoute = this.route.firstChild !== null;
    });

    this.setRouteProperties(this.router.url);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setRouteProperties(event.urlAfterRedirects);
      }
    });
  }

  private setRouteProperties(url: string): void {
    const routeParts = url.split('/');
    this.appHeaderProp = routeParts[1] || '';
    this.appSubHeaderProp = routeParts[2] || '';
  }
}
