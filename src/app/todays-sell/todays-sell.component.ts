import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-todays-sell',
  templateUrl: './todays-sell.component.html',
  styleUrls: ['./todays-sell.component.css'],
})
export class TodaysSellComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}
  list;
  isPrinting = false;

  ngOnInit() {}
  get_item_Sell(item_name) {
    this.mainService.getTodaysItem(item_name).then((data) => {
      this.list = data;
    });
  }
  printIt() {
    this.mainService.purchasePrint.next(true);
    this.isPrinting = true;
    setTimeout(() => {
      window.print();
    }, 0);
    setTimeout(() => {
      this.mainService.purchasePrint.next(false);
      this.isPrinting = false;
    }, 0);
  }
}
