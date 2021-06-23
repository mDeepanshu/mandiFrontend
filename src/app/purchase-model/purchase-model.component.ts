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
    this.purchaseForm.patchValue(this.data);
  }
  save() {
    this.mainService.editPurchase(this.purchaseForm.value, this.data._id);
  }
  calculate() {}
  removeItem(i) {}
}
