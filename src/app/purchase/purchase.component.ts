import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Purchase } from '../models/purchase.model';
import { PurchaseTable } from '../models/purchaseTable.model';
import { Party } from '../models/party.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
})
export class PurchaseComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}
  purchaseForm: FormGroup;
  tableArr: PurchaseTable[] = [];
  public purchaseDetail: Purchase;
  //
  public date =
    new Date().getDate() +
    '/' +
    new Date().getMonth() +
    '/' +
    new Date().getFullYear();
  //
  options;
  filteredOptions: Observable<string[]>;

  //
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
      }),
      setThree: new FormGroup({
        totalExpense: new FormControl(null),
        billTotal: new FormControl(null),
        netAmount: new FormControl(null),
      }),
    });
    //

    //
    this.mainService
      .getConstants()
      .then((data: { hammali_rate; bhada_rate; tax_rate }) => {
        this.purchaseForm.patchValue({
          setOne: {
            hammali: data.hammali_rate,
            bhada: data.bhada_rate,
            tax: data.tax_rate,
          },
        });
      });
    //
  }
  public timer;
  //

  partyName(val) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      console.log(val);
      this.mainService.autoCompleteName(val, 0).then((arr) => {
        console.log(arr);
        this.options = arr;
      });
    }, 1000);
  }
  addNew() {
    this.tableArr.push(this.purchaseForm.value.setTwo);
    console.log(
      Number(this.purchaseForm.value.setThree.billTotal),
      Number(this.purchaseForm.value.setTwo.amount)
    );

    let bag = Number(this.purchaseForm.value.setTwo.bag);
    this.purchaseForm.patchValue({
      setOne: {
        hammali: bag * Number(this.purchaseForm.value.setOne.hammali),
        bhada: bag * Number(this.purchaseForm.value.setOne.bhada),
        tax: bag * Number(this.purchaseForm.value.setOne.tax),
      },
      setThree: {
        billTotal:
          Number(this.purchaseForm.value.setThree.billTotal) +
          Number(this.purchaseForm.value.setTwo.quantity) *
            Number(this.purchaseForm.value.setTwo.rate),
      },
    });
  }
  onSubmit() {
    this.purchaseDetail = this.purchaseForm.value.setOne;

    this.purchaseDetail.items = this.tableArr;
    console.log(this.purchaseDetail);
  }
  onPartySelect(name) {
    console.log(name.source.value);

    this.mainService.findParty(name.source.value).then((data: Party) => {
      console.log(data.commission);

      this.purchaseForm.patchValue({
        setOne: {
          commRate: data.commission,
        },
      });
    });
  }

  //
  //
}
