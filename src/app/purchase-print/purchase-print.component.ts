import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { PurchaseTable } from '../models/purchaseTable.model';

@Component({
  selector: 'app-purchase-print',
  templateUrl: './purchase-print.component.html',
  styleUrls: ['./purchase-print.component.css'],
})
export class PurchasePrintComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}
  d = new Date();
  tableArr: PurchaseTable[] = [];

  date = `${this.d.getDate()}/${this.d.getMonth() + 1}/${this.d.getFullYear()}`;
  partyName = 'damon8';
  data;
  colOne = {
    commission: '100',
    hammali: '200',
    tax: '300',
    bhada: '400',
    driver: '500',
    cash: '600',
  };
  colTwo = {
    to_exp: '',
    bill_total: '',
    net_amount: '',
  };
  ngOnInit() {
    console.log(this.mainService.tempArr, this.mainService.tempObj);

    this.tableArr = this.mainService.tempArr;
    this.colOne = this.mainService.tempObj.setOne;
    this.colTwo = this.mainService.tempObj.setThree;
    this.partyName = this.mainService.tempObj.partyName;
    // this.mainService.DataToPrint.subscribe((data) => {
    //   console.log('dataDATA', data);
    //   this.tableArr = data.arr;
    //   this.colOne = data.obj.setOne;
    //   this.colTwo = data.obj.setThree;
    //   this.partyName = data.obj.partyName;
    // });
  }
}
