import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
})
export class PurchaseComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}

  purchaseForm: FormGroup;
  public tableArr: Array<any> = [];
  ngOnInit() {
    this.purchaseForm = new FormGroup({
      setOne: new FormGroup({
        bhada: new FormControl(null),
        hammali: new FormControl(null),
        cash: new FormControl(null),
        commRate: new FormControl(null),
        bhadaRate: new FormControl(null),
        comm: new FormControl(null),
        tax: new FormControl(null),
        stationCharge: new FormControl(null),
        driver: new FormControl(null),
      }),
      setTwo: new FormGroup({
        item: new FormControl(null),
        bag: new FormControl(null),
        quantity: new FormControl(null),
        rate: new FormControl(null),
        amount: new FormControl(null),
      }),
    });
  }
  public timer;

  partyName(val) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      console.log(val);
      this.mainService.autoCompleteName(val, '', '');
    }, 1000);
  }
  addNew() {
    console.log(this.purchaseForm.value.setTwo);
    this.tableArr.push(this.purchaseForm.value.setTwo);
  }
  onSubmit() {
    console.log(this.purchaseForm.value);
  }
}
