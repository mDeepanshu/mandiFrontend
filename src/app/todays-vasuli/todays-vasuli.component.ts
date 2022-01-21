import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-todays-vasuli',
  templateUrl: './todays-vasuli.component.html',
  styleUrls: ['./todays-vasuli.component.css'],
})
export class TodaysVasuliComponent implements OnInit {
  tableArr;

  constructor(private mainService: MainServiceService) {}

  ngOnInit(): void {}
  printIt() {
    this.mainService.DataToPrint.next(this.tableArr);
    this.mainService.purchasePrint.next('todayVasuli');
    setTimeout(() => {
      window.print();
    }, 0);
  }
}
