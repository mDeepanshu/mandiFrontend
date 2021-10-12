import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-todays-vasuli',
  templateUrl: './todays-vasuli.component.html',
  styleUrls: ['./todays-vasuli.component.css'],
})
export class TodaysVasuliComponent implements OnInit {
  tableArr;
  isPrinting = false;

  constructor(private mainService: MainServiceService) {}

  ngOnInit(): void {}
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
