import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  title: string = 'MSN 2019'
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['/dashboard/contacts'])
  }

}
