import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainServiceService } from '../main-service.service';
import { Party } from '../models/party.model';
import { SellTransaction } from '../models/sellTransaction.model';
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css'],
})
export class SellComponent implements OnInit {
  constructor(private mainService: MainServiceService) {}
  public tableArr: Array<{ id: string; amount: number }> = [];
  sellForm: FormGroup;
  public timer;
  public options: string[] = [];
  selectedId;
  @ViewChild('table') from: ElementRef;

  public date =
    new Date().getDate() +
    '/' +
    new Date().getMonth() +
    '/' +
    new Date().getFullYear();

  ngOnInit() {
    this.sellForm = new FormGroup({
      item_name: new FormControl(null),
      amount: new FormControl(null),
    });
  }
  addNew() {
    console.log(this.sellForm.value);
    this.tableArr.push({
      id: this.selectedId,
      amount: this.sellForm.value.amount,
    });
  }

  itemName(val) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      console.log(val);
      // this.mainService.autoCompleteName(val, '', '');
    }, 1000);
  }
  //

  partyName(val) {
    console.log(this.options);

    clearTimeout(this.timer);
    this.options = [];
    this.timer = setTimeout(() => {
      console.log(val);
      this.mainService
        .autoCompleteName(val, 'types=0&types=2&types=3')
        .then((arr: { name: string }[]) => {
          console.log(this.options);
          arr.forEach((element) => {
            console.log(this.options);
            this.options.push(element.name);
          });
        });
    }, 1000);
  }
  onPartySelect(name) {
    this.mainService.findParty(name.source.value).then((data: Party) => {
      console.log(data);
      this.selectedId = data._id;
    });
  }

  removeItem(i) {
    console.log(i);
    delete this.tableArr[i];
    this.tableArr.splice(i, 1);
  }
  save() {
    let obj: SellTransaction = this.sellForm.value;
    console.log(obj);

    obj.parties = this.tableArr;
    console.log(this.tableArr);
    console.log(obj);

    obj.date = new Date();

    this.mainService.sellTransaction(obj).then((data) => {
      console.log(data);
    });
  }
  resetForm() {
    // this.purchaseForm.markAsPristine();
    this.sellForm.reset();
  }
}
