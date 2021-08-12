import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-purchase-model',
  templateUrl: './purchase-model.component.html',
  styleUrls: ['./purchase-model.component.css'],
})
export class PurchaseModelComponent implements OnInit {
  constructor(
    private mainService: MainServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // console.log(data);
    // this.purchaseForm.patchValue(data);
  }
  purchaseForm: FormGroup;
  hammaliRate;
  taxRate;
  ngOnInit() {
    this.purchaseForm = new FormGroup({
      bhada: new FormControl(Validators.required),
      hammali: new FormControl(Validators.required),
      cash: new FormControl(null, Validators.required),
      commission_rate: new FormControl(null, Validators.required),
      bhada_rate: new FormControl(null, Validators.required),
      commission: new FormControl(Validators.required),
      tax: new FormControl(null, Validators.required),
      station_charge: new FormControl(null, Validators.required),
      driver: new FormControl(null, Validators.required),
      to_exp: new FormControl(null, Validators.required),
      bill_total: new FormControl(null, Validators.required),
      net_amount: new FormControl(null, Validators.required),
    });
    console.log(this.data);
    this.mainService
      .getConstants()
      .then((data: { hammali_rate; bhada_rate; tax_rate }) => {
        this.taxRate = data.tax_rate;
        this.hammaliRate = data.hammali_rate;
      });
    this.purchaseForm.patchValue(this.data);
  }
  save() {
    this.mainService.editPurchase(this.purchaseForm.value, this.data._id);
  }
  calculate() {
    let objOne = this.purchaseForm.value;
    let billTotal = 0;
    let totalBag = 0;

    this.data.items.forEach((element) => {
      billTotal =
        Number(billTotal) +
        Math.round(Number(element.quantity) * Number(element.rate));
      totalBag = Number(totalBag) + Number(element.bag);
    });
    console.log(objOne.commission_rate, billTotal);
    this.purchaseForm.patchValue({
      hammali: Math.round(totalBag * this.hammaliRate),
      bhada: Math.round(totalBag * objOne.bhada_rate),
      tax: Math.round(totalBag * this.taxRate),
      commission: Math.round((objOne.commission_rate / 100) * billTotal),
    });
    let total_exp =
      Math.round(totalBag * objOne.bhada_rate) +
      Math.round((objOne.commission_rate / 100) * billTotal) +
      objOne.driver +
      objOne.station_charge +
      Math.round(totalBag * this.hammaliRate) +
      Math.round(totalBag * this.taxRate) +
      objOne.cash;
    this.purchaseForm.patchValue({
      bill_total: billTotal,
      to_exp: total_exp,
      net_amount: billTotal - total_exp,
    });
  }
  removeItem(i) {
    this.data.items.splice(i, 1);
  }
  arrayValChange(from, val, i) {
    setTimeout(() => {
      switch (from) {
        case 'item':
          this.data.items[i].item = val;
          break;
        case 'bag':
          this.data.items[i].bag = val;
          break;
        case 'quantity':
          this.data.items[i].quantity = val;
          break;
        case 'rate':
          this.data.items[i].rate = val;
          break;
      }
    }, 400);
  }
}
