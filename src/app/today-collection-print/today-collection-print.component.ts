import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-today-collection-print',
  templateUrl: './today-collection-print.component.html',
  styleUrls: ['./today-collection-print.component.css'],
})
export class TodayCollectionPrintComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}
  tableArr;
  ngOnInit() {
    this.mainService.DataToPrint.subscribe((data) => {
      this.tableArr = data;
    });
  }
}
