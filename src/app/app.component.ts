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
  constructor(public mainService: MainServiceService) {}
  ngOnInit() {
    this.mainService.purchasePrint.subscribe((message) => {
      this.isPrint = message;
      if (message == true) {
        document.getElementById('mainContent').className = 'col';
      } else {
        document.getElementById('mainContent').className = 'col-10';
      }
    });
  }
}
