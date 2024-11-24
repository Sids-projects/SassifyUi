import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-set',
  templateUrl: './template-set.component.html',
  styleUrl: './template-set.component.scss',
})
export class TemplateSetComponent {
  componentList: any = [];
  hasChildRoute: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.componentList = {
      uiComponents: [
        {
          routerLink: 'SassifyEdition-router',
          displayName: 'Sassify Edition',
        },
        {
          routerLink: 'SidenavSet-router',
          displayName: 'Side-Navigation Set',
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
