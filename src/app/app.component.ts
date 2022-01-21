import { Component, OnInit } from '@angular/core';
import { MainServiceService } from './main-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mandi-fe';
  isPrint = false;
  date = new Date();
  print = '';
  constructor(public mainService: MainServiceService) {}
  ngOnInit() {
    this.mainService.purchasePrint.subscribe((data) => {
      this.print = data;
    });
  }
}
