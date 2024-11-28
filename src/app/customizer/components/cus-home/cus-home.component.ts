import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cus-home',
  templateUrl: './cus-home.component.html',
  styleUrl: './cus-home.component.scss',
})
export class CusHomeComponent {
  constructor(private router: Router) {}

  redirectToCusAppRouter() {
    this.router.navigate(['CustomizerRouting', 'CusApp-Route']);
  }
}
