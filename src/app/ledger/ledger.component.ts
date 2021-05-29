import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Ledger } from '../models/ledger.model';
@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css'],
})
export class LedgerComponent implements OnInit {
  tableArr: Ledger;

  constructor(private mainService: MainServiceService) {}

  d = new Date().getDate();
  m = new Date().getMonth();
  y = new Date().getFullYear();
  public date = this.d + '/' + this.m + '/' + this.y;
  ngOnInit() {
    this.mainService.getLedger(this.d, this.m, this.y).then((data: Ledger) => {
      this.tableArr = data;
    });
  }
}
