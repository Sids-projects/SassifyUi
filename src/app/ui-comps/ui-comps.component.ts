import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ui-comps',
  templateUrl: './ui-comps.component.html',
  styleUrls: ['./ui-comps.component.scss'],
})
export class UiCompsComponent implements OnInit {
  componentList: any = [];
  hasChildRoute: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.componentList = {
      uiComponents: [
        {
          routerLink: 'Button-Route',
          displayName: 'Button',
        },
        {
          routerLink: 'Card-Route',
          displayName: 'Card',
        },
        {
          routerLink: 'Dropdown-Route',
          displayName: 'Dropdown',
        },
        {
          routerLink: 'Inputs-Route',
          displayName: 'Inputs',
        },
        {
          routerLink: 'Table-Route',
          displayName: 'Table',
        },
      ],
    };
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.hasChildRoute = this.route.firstChild !== null;
    });
  }
}
