import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css'],
})
export class SellComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}
  public tableArr: Array<any> = [];
  sellForm: FormGroup;
  public timer;
  options: string[] = ['One', 'Two', 'Three'];

  ngOnInit() {
    this.sellForm = new FormGroup({
      partyName: new FormControl(null),
      amount: new FormControl(null),
    });
  }
  addNew() {
    console.log(this.sellForm.value);
    this.tableArr.push(this.sellForm.value);
  }

  itemName(val) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      console.log(val);
      // this.mainService.autoCompleteName(val, '', '');
    }, 1000);
  }
}
