import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-collection-receipt-print',
  templateUrl: './collection-receipt-print.component.html',
  styleUrls: ['./collection-receipt-print.component.css'],
})
export class CollectionReceiptPrintComponent implements OnInit {
  constructor(public mainService: MainServiceService) {}
  dateToShow = '';
  username = '';
  amount = '';
  ngOnInit() {
    this.mainService.DataToPrint.subscribe((data) => {
      this.username = data.username;
      this.amount = data.amount;
    });
  }
}
