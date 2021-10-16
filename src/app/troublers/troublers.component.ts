import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-troublers',
  templateUrl: './troublers.component.html',
  styleUrls: ['./troublers.component.css'],
})
export class TroublersComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}
  tableArr;
  ngOnInit() {
    this.mainService.getTroublers().then((data) => {
      this.tableArr = data;
    });
  }
}
